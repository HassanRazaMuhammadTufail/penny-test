import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  isValidPassword(password: string): Promise<boolean>;
}