import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import bodyParser from 'body-parser';
import homeRouter from './routes/shop';
import adminData from './routes/admin';
import errorRoute from './controllers/error';
import userRoute from './routes/user';

createConnection()
  .then(_connection => {
    const app = express();

    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static('dist'));

    app.use('/user', userRoute.router);

    app.use('/admin', adminData.router);

    app.use(homeRouter);

    app.use(errorRoute.error404);

    app.listen(8080), console.log('Listening at 8080');
  })
  .catch(error => console.log(error));
