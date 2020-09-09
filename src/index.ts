import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import bodyParser from 'body-parser';
import homeRouter from './routes/shop';
import adminData from './routes/admin';
import errorRoute from './controllers/error';

createConnection()
  .then((_connection) => {
    const app = express();

    app.use(
      '/user/:username/:email',
      (req: any, res: express.Response, _next: express.NextFunction) => {
        const uname = req.params.username;
        const uemail = req.params.email;
        req.user = uname;
        console.log(req.user);

        res.send(`
        <h1>User created ${uname} ${uemail}</h1>
        <form action='/'>
        <input type="hidden" value="${uname}" name="username">
        <input type="hidden" value="${uemail}" name="useremail">
        <button type='submit'>lets go</button>
        </form>
        `);
      }
    );

    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static('dist'));

    app.use('/admin', adminData.router);
    app.use(homeRouter);
    app.use(errorRoute.error404);

    app.listen(8080), console.log('Listening at 8080');
  })
  .catch((error) => console.log(error));

