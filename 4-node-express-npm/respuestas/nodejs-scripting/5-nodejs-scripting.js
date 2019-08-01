var filterFn = require('./5-mod-nodejs-scripting.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

filterFn(dir, filterStr, function (err, list) {
  if(err)
  return console.error('There was an error:', err);

  list.forEach((file)=>{
    console.log(file);
  });
});
