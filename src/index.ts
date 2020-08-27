import express from 'express';
import bodyParser from 'body-parser';
import homeRouter from './routes/shop';
import adminData from './routes/admin';
import errorRoute from './controllers/error';

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

app.use('/admin', adminData.router);
app.use(homeRouter);
app.use(errorRoute.error404);
console.log('hey');

app.listen(8080), console.log('Listening at 8080');
