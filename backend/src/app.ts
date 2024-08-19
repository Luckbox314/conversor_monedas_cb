import express from 'express';
import cors from 'cors';
import conversionRoutes from './routes/conversionRoutes';
import { errorHandler } from './middlewares';

const app = express();

app.use(cors(
    {
      origin: 'http://localhost:3000',
    }
));

app.use(express.json());
app.use('/api', conversionRoutes);
app.use(errorHandler);

export default app;