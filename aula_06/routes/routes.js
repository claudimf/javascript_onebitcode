const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/form_example', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/form_example.html'));
});

module.exports = router;