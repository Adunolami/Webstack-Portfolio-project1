// server/routes/music.js
const express = require('express');
const router = express.Router();

// Dummy track data
const tracks = [
  { id: 1, name: 'Track 1', url: 'https://example.com/track1.mp3' },
  { id: 2, name: 'Track 2', url: 'https://example.com/track2.mp3' },
];

router.get('/tracks', (req, res) => {
  res.json(tracks);
});

module.exports = router;
