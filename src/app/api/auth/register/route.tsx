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
    await newUser.save();
    return new NextResponse('User has been created successfully', {
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
