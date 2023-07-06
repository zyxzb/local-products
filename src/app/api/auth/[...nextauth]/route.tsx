import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { Credentials } from '@/types';

const credentials: Credentials = {
  clientId: (process.env.GOOGLE_CLIENT_ID as string) || '',
  clientSecret: (process.env.GOOGLE_CLIENT_SECRET as string) || '',
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: credentials.clientId,
      clientSecret: credentials.clientSecret,
    }),
  ],
});

export { handler as GET, handler as POST };
