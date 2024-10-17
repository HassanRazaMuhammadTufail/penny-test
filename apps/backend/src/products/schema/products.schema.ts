import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      price: { type: String, required: true },
      image: { type: String },
      description: { type: String, required: true },
    },
    { timestamps: true },
  );