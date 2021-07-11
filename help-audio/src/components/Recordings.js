import React, { useState } from "react";
import soundfile from "../audiofiles/Arushi.mp3";
import Sound from "react-sound";
import "../css/recordings.css"

const Recordings = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
        <div class="callBtn">
        <br></br> <br></br> <br></br>
        Press button for simulated phone call to play. There will be 5 seconds in audio for you to respond! <br></br><br></br><br></br>
      <button class="audioBtn" onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? "Play" : "Stop"}
      </button>
      </div>
      <Sound
        url={soundfile}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
};

export default Recordings;