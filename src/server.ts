import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

app.use(cors({
  origin: process.env.ECOLETA_WEB_URL,
  optionsSuccessStatus: 200,
}));

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(
  path.resolve(
    __dirname,
    '..',
    'uploads',
  )
));

app.use(errors());

app.listen(process.env.PORT || 3333);
