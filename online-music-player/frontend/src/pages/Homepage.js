import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [tracks, setTracks] = useState([]);
  const [newTrack, setNewTrack] = useState({ title: '', artist: '', url: '' });

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get('/api/music', {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setTracks(response.data);
      } catch (error) {
        console.error('Failed to fetch tracks:', error);
      }
    };

    fetchTracks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/music', newTrack, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setTracks([...tracks, response.data]);
      setNewTrack({ title: '', artist: '', url: '' });
    } catch (error) {
      console.error('Failed to add track:', error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTrack.title}
          onChange={(e) => setNewTrack({ ...newTrack, title: e.target.value })}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={newTrack.artist}
          onChange={(e) => setNewTrack({ ...newTrack, artist: e.target.value })}
          placeholder="Artist"
          required
        />
        <input
          type="text"
          value={newTrack.url}
          onChange={(e) => setNewTrack({ ...newTrack, url: e.target.value })}
          placeholder="URL"
          required
        />
        <button type="submit">Add Track</button>
      </form>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            {track.title} by {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
