'use strict';

module.exports = (config)=> (req, res, next)=> {
    req.config = config;

    if (req.path.indexOf('/api') == 0) {
        res.setHeader('Cache-Control', "no-cache");
        res.setHeader('Pragma', "no-cache");
        res.setHeader('Exprires', 0);
    }

    next();
};