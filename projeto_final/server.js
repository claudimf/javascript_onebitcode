const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import the routes
const routes = require('./routes/routes');

// Use the routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});