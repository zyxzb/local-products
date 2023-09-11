import User from '@/models/User';
import connect from '@/utils/db';
import { NextResponse, NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();
  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const user = await User.findOne({
      email,
    });
    if (user) {
      return new NextResponse('User already exist in database', {
        status: 409,
      });
    }
    if (!user) {
      await newUser.save();
      return new NextResponse('User has been created successfully', {
        status: 201,
      });
    }
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
