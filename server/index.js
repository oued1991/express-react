const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, '../dist')));


app.get('/test', (req, res) => {
  res.send('Server is operational');
});


app.get('/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'https://images.wallpapersden.com/image/download/vinicius-junior-hd-2022_bWhuZ2uUmZqaraWkpJRnZWltrWdlaW0.jpg'));
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});