import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import MongoDB from './configs/mongo';
import { checkOverload } from './helpers/checkOverload';

const app = express();

//init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

//init routes
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello World' });
});

//init db
MongoDB.getInstance();
checkOverload();
//handling error

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log('Server has been terminated'));
});
