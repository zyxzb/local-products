import mongoose from 'mongoose';
import { number } from 'yup';

const { Schema } = mongoose;

const adSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    images: {
      type: [Object],
      required: false,
      default: () => [],
    },
    coord: {
      type: [Number, Number],
      required: false,
      default: () => [],
    },
  },
  { timestamps: true },
);

export default mongoose.models['Ad'] || mongoose.model('Ad', adSchema);
