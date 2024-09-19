import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import bookRoutes from './routes/bookRoutes';
import errorHandler from './middleware/errorMiddleware';
import cors from 'cors';
import bodyParser from 'body-parser';

// .env file
dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());                      
app.use(bodyParser.json());           
app.use(bodyParser.urlencoded({      
  extended: true
}));

// API routes
app.use('/api', bookRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
