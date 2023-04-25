import { useRef, memo, useEffect } from "react";

function AudioButton({ sound, setDisplay, isPlay, valueVolume }) {
  const audioRef = useRef();


  const handleClick = (event) => {
    let keyName = event.target.children[0].id
    setDisplay(keyName);
    audioRef.current.volume = Number(valueVolume);
    audioRef.current.currentTime = 0;
    isPlay ? audioRef.current.play() : null;
  };

  useEffect(() => {
    const handlePress = (e) => {
        const key = e.key.toUpperCase()
        const drum = document.getElementById(key)
        if(drum) {
            drum.click()
        }
    }
    window.addEventListener('keydown', handlePress)
    return () => {
        window.removeEventListener('keydown', handlePress)
    }
  },[])

  return (
    <div className="btn" onClick={handleClick} id={sound.id}>
      <audio ref={audioRef} src={sound.url} id={sound.name}></audio>
      {sound.id}
    </div>
  );
}

export default memo(AudioButton);
