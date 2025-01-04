import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void | Response => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract token from 'Bearer token'

  if (!token) {
    return res.sendStatus(401); // Unauthorized if no token provided
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden if token verification fails
    }

    if (typeof user === 'object' && user !== null) {
      req.user = user as JwtPayload; // Attach the decoded user payload to req.user
    } else {
      return res.sendStatus(403); // Forbidden if user payload is invalid
    }

    next(); // Proceed to the next middleware
    return; // Ensure all code paths return a value
  });
};
