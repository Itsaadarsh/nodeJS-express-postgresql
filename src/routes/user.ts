import express from 'express';
import { User } from '../models/user';
import { Cart } from '../models/cart';
const router = express.Router();

router.get(
  '/:username/:email',
  (req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const { username, email } = req.params;
    res.send(`
  <h1>User created ${uname} ${uemail}</h1>
  <form  method='POST'>
  <input type="hidden" value="${username}" name="username">
  <input type="hidden" value="${email}" name="useremail">
  <button type='submit'>lets go</button>
  </form>
  `);
  }
);

router.post(
  '/:username/:email',
  (req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const user = new User();
    const { username, email } = req.body;
    user.username = username;
    user.email = useremail;
    user.save();

    const cart = new Cart();
    cart.userid = user;
    cart.save();

    res.redirect('/');
  }
);

export default module.exports = { router };
