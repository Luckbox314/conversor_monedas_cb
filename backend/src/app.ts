import express from 'express';
import conversionRoutes from './routes/conversionRoutes';
import { errorHandler } from './middlewares';

const app = express();

app.use(express.json());
app.use('/api', conversionRoutes);
app.use(errorHandler);

export default app;