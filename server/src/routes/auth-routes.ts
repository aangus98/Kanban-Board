import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Generate the JWT
    const accessToken = jwt.sign(
      { username },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: '1h' } // Token expiration for security
    );

    return res.json({ accessToken });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'An internal server error occurred' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
