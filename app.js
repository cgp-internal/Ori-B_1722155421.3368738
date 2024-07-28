const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const router = require('./routes/index').router;

app.use('/', router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});