import NextAuth, { RequestInternal } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { GoogleCredentials } from '@/types';
import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';

const googleCredentials: GoogleCredentials = {
  clientId: (process.env.GOOGLE_CLIENT_ID as string) || '',
  clientSecret: (process.env.GOOGLE_CLIENT_SECRET as string) || '',
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleCredentials.clientId,
      clientSecret: googleCredentials.clientSecret,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<string, string> | undefined,
        req: Pick<RequestInternal, 'body' | 'method' | 'headers' | 'query'>,
      ) {
        //Check if the user exists.
        await connect();

        try {
          if (!credentials) {
            throw new Error('Missing credentials');
          }
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password,
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Wrong Credentials!');
            }
          } else {
            throw new Error('User not found!');
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: '/twoje-konto/login',
  },
});

export { handler as GET, handler as POST };
