const express = require('express');
const app = express();
const port = 3000;

// Existing /hello route
app.get('/hello', (req, res) => {
  res.send('Hello World');
});

// New route for the root path /
app.get('/health', (req, res) => {
  res.send('ok');
});

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = { 
  app,
  server
};