const express = require('express');
const app = express();
const port = 3000;

// Existing /hello route
app.get('/hello', (req, res) => {
  res.send('Hello World Test');
});

// New route for the root path /
app.get('/health', (req, res) => {
  res.send('Ok');
});

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = { 
  app,
  server
};