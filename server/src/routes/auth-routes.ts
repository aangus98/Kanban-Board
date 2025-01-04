import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) {
    return res.status(400).json({ error: 'Invalid username or password' });
  } else {
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET as string);
      return res.json({ accessToken });
    } else {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
