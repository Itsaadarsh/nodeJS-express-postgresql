import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import express from 'express';
import bodyParser from 'body-parser';
import homeRouter from './routes/shop';
import adminData from './routes/admin';
import errorRoute from './controllers/error';

createConnection()
  .then(async (connection) => {
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch((error) => console.log(error));

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

app.use('/admin', adminData.router);
app.use(homeRouter);
app.use(errorRoute.error404);

app.listen(8080), console.log('Listening at 8080');
