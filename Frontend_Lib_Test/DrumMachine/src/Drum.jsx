// Drum.jsx

import { AudioClip } from "./types";

function Drum({ AudioClip }) {
  const playSound = (clip) => {
    document.getElementById(clip.keyTrigger)
      .play()
      .catch(console.error);

    document.getElementById("display").innerText = clip.description;
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${AudioClip.keyTrigger}`}
      onClick={() => playSound(AudioClip)}
    >
      <audio src={AudioClip.url} id={AudioClip.keyTrigger} className="clip" />
      {AudioClip.keyTrigger}
    </button>
  );
}

export default Drum;