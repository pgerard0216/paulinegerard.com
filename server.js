const express = require('express');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'src');
const PORT = 3000;
const app = express();

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT);