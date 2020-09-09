import express from 'express';
import { User } from '../models/user';
const router = express.Router();

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
  const uname: string = req.params.username;
  const uemail: string = req.params.email;
  user.username = uname;
  user.email = uemail;
  req.newuser = user;
  users.push(user);
  user.save();
  req.userid = user.id;
  res.redirect('/');
});

export default module.exports = { router, users };
