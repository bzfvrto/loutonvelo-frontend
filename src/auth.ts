import NextAuth, { DefaultSession } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { loginUser } from './app/lib/actions';
import { User } from './app/lib/definitions';
import { JWT } from "next-auth/jwt"

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
    providers: [Credentials({
        credentials: {
            email: {},
            password: {},
        },
        authorize: async (credentials) => {
            if (credentials.email && credentials.password) {
                const user = await loginUser({ email: String(credentials.email), password: String(credentials.password) })
                console.log('in authorize method', user);

                if (user) {
                    return user;
                }
                console.log('Invalid credentials');
                return null;
            }
            // return user object with the their profile data
            return null
          },
    })],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.id = user._id
                token.role = user.role
            }
            // console.log('token', token);

          return token
        },
        session({ session, token }) {
            session.user._id = token.id
            session.user.role = token.role
            // console.log("session", session);

          return session
        },
      },
});

declare module "next-auth" {
    interface Session {
        user: {
            _id: string;
            role: string;
      } & DefaultSession["user"];
    }
    interface User {
        _id: string;
        role: string;
        email?: string | null | undefined;
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        id: string,
        email: string;
        role: string;
    }
}
