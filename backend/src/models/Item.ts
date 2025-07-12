import mongoose, { Document } from 'mongoose';

export interface IItem extends Document {
  title: string;
  description: string;
  category: string;
  type: string;
  size: string;
  condition: string;
  images: string[];
  tags: string[];
  pointValue: number;
  owner: mongoose.Types.ObjectId;
  status: 'available' | 'pending' | 'swapped';
  createdAt: Date;
}

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories', 'Shoes', 'Other'],
  },
  type: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
    enum: ['New', 'Like New', 'Good', 'Fair'],
  },
  images: [{
    type: String,
    required: true,
  }],
  tags: [{
    type: String,
    trim: true,
  }],
  pointValue: {
    type: Number,
    required: true,
    min: 0,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'pending', 'swapped'],
    default: 'available',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IItem>('Item', itemSchema); 