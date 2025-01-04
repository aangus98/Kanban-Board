import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      if (typeof user !== 'string' && user !== undefined) {
        req.user = user as JwtPayload;
      } else {
        return res.sendStatus(403);
      }
      req.user = user as JwtPayload;
      next();
      return;
    });
  }
  return;
};
