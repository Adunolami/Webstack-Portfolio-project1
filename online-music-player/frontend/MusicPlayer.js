// MusicPlayer.js
import React, { useState } from 'react';

const MusicPlayer = ({ tracks }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const playTrack = (track) => {
    setCurrentTrack(track);
    // Implement play functionality
  };

  return (
    <div>
      <div>
        {currentTrack && <audio src={currentTrack.url} controls autoPlay />}
      </div>
      <div>
        {tracks.map(track => (
          <button key={track.id} onClick={() => playTrack(track)}>
            {track.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
