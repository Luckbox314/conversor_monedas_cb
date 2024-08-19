import app from './app';
import cors from 'cors';

const port = process.env.PORT || 5000;

app.use(cors(
  {
    origin: 'http://localhost:3000',
  }
));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});