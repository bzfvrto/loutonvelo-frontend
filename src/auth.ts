import NextAuth, { DefaultSession } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { loginUser } from './app/lib/actions';
import { User } from './app/lib/definitions';
import { JWT } from "next-auth/jwt"

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    debug: true,
    // logger: {
    //     error(code, ...message) {
    //       console.error(code, message)
    //     },
    //     warn(code, ...message) {
    //         console.warn(code, message)
    //     },
    //     debug(code, ...message) {
    //         console.debug(code, message)
    //     },
    //   },
    providers: [Credentials({
        credentials: {
            email: {},
            password: {},
        },
        authorize: async (credentials) => {
            if (credentials.email && credentials.email !== "" && credentials.password) {
                const user = await loginUser({ email: String(credentials.email), password: String(credentials.password) })
                console.log('in authorize method');

                if (user) {
                    console.log('isset user', user);
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
                token.bearer = user.token
            }
            // console.log('token', token);

          return token
        },
        session({ session, token }) {
            session.user._id = token.id
            session.user.role = token.role
            session.bearer = token.bearer
            // console.log("session", session);
            return session
        },
    },
    session: {
        strategy: 'jwt',
    },
});

declare module "next-auth" {
    interface Session {
        bearer: string;
        user: {
            _id: string;
            role: string;
            token: string;
      } & DefaultSession["user"];
    }
    interface User {
        _id: string;
        role: string;
        token: string;
        bearer?: string;
        email?: string | null | undefined;
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        id: string,
        email: string;
        role: string;
        token: string;
        bearer: string;
    }
}
