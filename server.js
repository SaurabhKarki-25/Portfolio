// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Single route rendering our one-page portfolio
app.get('/health', (req, res) => res.status(200).send('OK'));

app.get('/', (req, res) => {
  res.render('index', { title: "Saurabh's Portfolio" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
