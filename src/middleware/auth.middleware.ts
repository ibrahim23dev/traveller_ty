// src/middleware/auth.middleware.ts
import { promises } from 'dns';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: 'No token provided' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
    // Optionally, attach user info to the request (you may extend Express.Request interface)
    (req as any).user = { id: decoded.id };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default auth;
