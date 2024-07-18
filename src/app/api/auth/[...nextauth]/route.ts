// import NextAuth, { NextAuthOptions } from 'next-auth';
// import GithubProvider from 'next-auth/providers/github';

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID ?? '',
//       clientSecret: process.env.GITHUB_SECRET ?? '',
//     }),
//   ],
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import { handlers } from '@/auth'; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
