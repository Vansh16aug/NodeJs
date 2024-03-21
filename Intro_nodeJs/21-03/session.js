const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true
}));

// Routes
app.get('/', (req, res) => {
  // Access session data
  if (req.session.views) {
    req.session.views++;
    res.send(`You visited this page ${req.session.views} times.`);
  } else {
    req.session.views = 1;
    res.send('Welcome to this page for the first time!');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});