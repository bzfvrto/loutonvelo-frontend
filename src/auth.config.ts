import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
      authorized({ auth, request: { nextUrl } }) {
          const isLoggedIn = !!auth?.user;
          const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
          const isOnUnauthenticatedRoute = nextUrl.pathname.startsWith('/auth');
        console.log('isOnDashboard', isOnDashboard);
        console.log('isLoggedIn', isLoggedIn);
        console.log('isOnUnauthenticatedRoute', isOnUnauthenticatedRoute);

          if (isOnDashboard) {
              if (isLoggedIn) return true;
              return false; // Redirect unauthenticated users to login page
          } else if (isOnUnauthenticatedRoute && isLoggedIn) {
              return Response.redirect(new URL('/dashboard', nextUrl));
          }
    //   else if (isLoggedIn) {
    //     return Response.redirect(new URL('/dashboard', nextUrl));
    //   }
          return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
