// server.ts
import app from './app';
import dbConnect from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
