const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { access_token } = req.headers;
  if (access_token) {
    jwt.verify(access_token, 'ASSIGMENT_STORE', (err, decoded) => {
      if (err) next({ name: 'INVALID_TOKEN' });
      else {
        req._customerId = decoded._id;
        next();
      }
    });
  } else next({ name: 'MISSING_TOKEN' });
};
