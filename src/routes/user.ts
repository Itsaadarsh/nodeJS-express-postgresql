import express from 'express';
import { User } from '../models/user';
import { Cart } from '../models/cart';
const router = express.Router();
import userRoute from '../routes/user';

const users: User[] = [];

router.get('/:username/:email', (req: any, res: express.Response, _next: express.NextFunction) => {
  const uname = req.params.username;
  const uemail = req.params.email;
  res.send(`
  <h1>User created ${uname} ${uemail}</h1>
  <form  method='POST'>
  <input type="hidden" value="${uname}" name="username">
  <input type="hidden" value="${uemail}" name="useremail">
  <button type='submit'>lets go</button>
  </form>
  `);
});

router.post('/:username/:email', (req: any, res: express.Response, _next: express.NextFunction) => {
  const user = new User();
  const cart = new Cart();
  const uname: string = req.params.username;
  const uemail: string = req.params.email;
  user.username = uname;
  user.email = uemail;
  users.push(user);
  user.save();
  cart.userid = userRoute.users[userRoute.users.length - 1];
  cart.save();
  req.userid = user.id;
  res.redirect('/');
});

export default module.exports = { router, users };
