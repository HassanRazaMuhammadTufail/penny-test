import * as jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'your-secret-key';

// Function to generate JWT
export function generateJwtToken(payload: any): string {
  return jwt.sign(payload, secretKey, {
    expiresIn: '8h',  // Token expiry time
  });
}

// Function to verify JWT
export function verifyJwtToken(token: string): any {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
}
