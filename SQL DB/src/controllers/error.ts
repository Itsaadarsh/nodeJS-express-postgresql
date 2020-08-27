import express from 'express';

const error404 = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};

export default module.exports = {
  error404,
};
