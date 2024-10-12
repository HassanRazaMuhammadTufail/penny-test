import * as mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    },
    { timestamps: true },
  );
  
  // Hash password before saving it
  UserSchema.pre('save', async function (next) {
    const user = this;
  
    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
  
    try {
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
  
      // Hash the password using the salt
      const hashedPassword = await bcrypt.hash(user.password, salt);
  
      // Replace the plain text password with the hashed password
      user.password = hashedPassword;
  
      // Proceed to save
      next();
    } catch (error) {
      return next(error);
    }
  });
  
  // Method to validate the password during login
  UserSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };