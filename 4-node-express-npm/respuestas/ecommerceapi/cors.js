// CORS
var cors = require('cors');
var whitelist = [undefined];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || isDevelopment) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
module.exports = cors(corsOptions);
