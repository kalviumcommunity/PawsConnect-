const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/ping', (req, res) => {
  res.send('pong');
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
}); 