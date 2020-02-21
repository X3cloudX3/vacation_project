


const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.headers.authorization, process.env.SECRET);
        if (decoded.user_type !== 'admin') {
            throw new Error('not admin')
        }
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({
            err: 'unauthorized',
            message: 'not admin'
        })
    }
}