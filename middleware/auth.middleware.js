var jwt = require('jsonwebtoken')
function authMiddleware(req, res, next) {
    try {
        console.log(req.url);
        if (req.url.toString().indexOf('/login')>-1) {
            next();
        }
        else {
            const auth = req.headers.authorization
            if (!auth) return res.status(401).send({ err: true, message: 'Unauthorized' })
            const token = auth.split(' ')[1]
            var decoded = jwt.verify(token, 'shhh')
            req.user = decoded
            next();

        }
    }
    catch (err) {
        console.log(err)
        res.status(401).send({ err: true, message: 'Unauthorized' })
    }

}


module.exports = { authMiddleware }