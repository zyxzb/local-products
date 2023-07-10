import mongoose from 'mongoose';

const db: string = process.env.MONGODB || '';

const connect = async () => {
  try {
    await mongoose.connect(db);
  } catch (error) {
    throw new Error('Connection failed!');
  }
};

export default connect;