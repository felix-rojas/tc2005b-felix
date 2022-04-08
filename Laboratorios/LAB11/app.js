const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// ejs and static path for views in EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.render('home.ejs')
})

app.listen(port, () => {
  console.log(`Webapp running on port: ${port}`)
})

// static file call
app.use(express.static(path.join(__dirname, 'public')));