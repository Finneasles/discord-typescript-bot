import { getRandomNumber } from '@/utils';
import mongoose, { Schema, Document,Types } from 'mongoose';

export interface IProfile extends Document {
  nickname: string;
  userId: Types.ObjectId;
  discriminator: number
  identifier: number
}

const profileSchema: Schema = new Schema({
  nickname: { type: String, required: true },
  // alias: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  discriminator: {
    type: Number,
    default: null,
  },
  identifier: {
    type: Number,
    default: null,
    unique: true
  },
});


profileSchema.pre('save', function (next) {
  if (!this.discriminator) {
    this.discriminator = getRandomNumber(4);
  }
  if (!this.identifier) {
    this.identifier = getRandomNumber(18);
  }
  next();
});

export const findByUserId = async ({ userId }: { userId: Types.ObjectId }) => {
  return await Profile.find({ userId });
};

export const createProfile= async (data: {
  nickname: string;
  userId: Types.ObjectId;
}) => {
  return await Profile.create({ nickname: data.nickname, userId: data.userId });
};

const Profile = mongoose.model<IProfile>('Profile', profileSchema)

export default Profile;