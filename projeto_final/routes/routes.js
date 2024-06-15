const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../admin.html'));
});

module.exports = router;