import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            const isOnAuthRoute = nextUrl.pathname.startsWith('/auth')
            if (isOnDashboard) {
                // console.log('is on dashboard, logged in ?', isLoggedIn);
              if (isLoggedIn) return true;
              return false; // Redirect unauthenticated users to login page
            } else if (isOnAuthRoute && isLoggedIn) {
              return Response.redirect(new URL('/dashboard', nextUrl));
            }
            // else if (isLoggedIn) {
            //     return Response.redirect(new URL('/dashboard', nextUrl));
            // }
            return true;
          },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
