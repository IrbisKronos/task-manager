import mongoose from 'mongoose';
import { DB_PASSWORD } from './secret.js';

const URI = `mongodb+srv://irbiskronos:${DB_PASSWORD}@cluster0.tylboms.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });
