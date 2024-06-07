import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { loginUser } from './app/lib/actions';
import { User } from './app/lib/definitions';

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
});
