// src/services/auth.service.ts
import User, { UserDocument } from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
  async signup(data: { email: string; password: string }): Promise<UserDocument> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new User({ email: data.email, password: hashedPassword });
    return user.save();
  }

  async signin(data: { email: string; password: string }): Promise<string> {
    const user = await User.findOne({ email: data.email });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });
    return token;
  }
}

export default new AuthService();
