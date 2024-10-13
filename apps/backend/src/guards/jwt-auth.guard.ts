import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { verifyJwtToken } from '../utils/jwt.utils';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    
    // Extract JWT token from Authorization header
    const authHeader = request.headers['authorization'];
    
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];  // Extract token part from "Bearer <token>"
    
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }

    try {
      // Verify the token and attach the decoded user to the request
      const decoded = verifyJwtToken(token);
      request['user'] = decoded;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
