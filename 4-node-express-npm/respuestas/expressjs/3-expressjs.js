const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`));
