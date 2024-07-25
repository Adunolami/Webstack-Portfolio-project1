const Track = require('../models/Track');

exports.getTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addTrack = async (req, res) => {
  const { title, artist, url } = req.body;
  try {
    const newTrack = new Track({ title, artist, url });
    const track = await newTrack.save();
    res.json(track);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
