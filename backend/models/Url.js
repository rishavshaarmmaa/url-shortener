import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema(
  {
    longUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortCode: {
      type: String,
      required: true,
      unique: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export default mongoose.model('Url', urlSchema);

