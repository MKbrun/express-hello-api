const express = require('express');
const app = express();
const port = 3000;

// Existing /hello route
app.get('/hello', (req, res) => {
  res.send('Hello World');
});

// New route for the root path /
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
