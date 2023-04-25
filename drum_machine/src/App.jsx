import { sounds } from "./seed/data";
import AudioButton from "./components/AudioButton";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [isPlay, setIsPlay] = useState(true);
  const [valueVolume, setValueVolume] = useState(1);

  const handleToggleSwitch = () => {
    setIsPlay((isPlay) => !isPlay);
  };

  return (
    <div className="wrapper h-screen flex items-center justify-center ">
      <div className="w-500 bg-slate-700 p-6 flex flex-col shadow-md border border-slate-100">
        <p className="text-white font-PS2 text-sm text-right ">
          Drum Machine FCC
        </p>
        {/* Display */}
        <p className="mt-3 w-full h-20  flex items-center justify-center bg-white font-PS2  text-2xl border border-slate-100">
          {isPlay ? display : null}
        </p>
        <div className="button-wrapper mt-6">
          {/* AudioButton Component */}
          <div className="grid grid-cols-3 gap-6 text-center">
            {sounds.map((sound) => (
              <AudioButton
                key={sound.id}
                sound={sound}
                setDisplay={setDisplay}
                isPlay={isPlay}
                valueVolume={valueVolume}
              />
            ))}
          </div>
        </div>
        <div className="w-full mt-12 flex items-center justify-evenly gap-2">
          {/* On/Off Toggle Switch */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={handleToggleSwitch}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
            <span className="ml-3 text-md font-medium text-white dark:text-gray-300">
              OFF
            </span>
          </label>

          {/* Volume */}
          <div className="flex items-center gap-2 text-white font-medium text-md">
            <input
              disabled={!isPlay ? true : false}
              type="range"
              max="1"
              min="0"
              step="0.01"
              className="w-ful"
              onChange={(e) => setValueVolume(e.target.value)}
            />
            Volume
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
