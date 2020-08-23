import express from 'express';
import bodyParser from 'body-parser';
import homeRouter from './routes/shop';
import adminData from './routes/admin';

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

app.use('/admin', adminData.router);
app.use(homeRouter);
app.use((_req, res, _next) => {
  res.render('404', { pageTitle: '404' });
});

app.listen(8080), console.log('Listening at 8080');
