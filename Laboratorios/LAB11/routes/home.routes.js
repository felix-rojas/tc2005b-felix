const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
    res.send('Time:', Date.now())
    next()
});

router.get('/home', (req, res) => {
    res.send('home')
  });


module.exports = router;