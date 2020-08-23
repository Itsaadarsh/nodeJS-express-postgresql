"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error404 = (_req, res, _next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};
exports.default = module.exports = {
    error404,
};
//# sourceMappingURL=error.js.map