import { useEffect, useRef, useState, useContext, memo } from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { AppContext } from "../App";

const Sound = ({ soundName, soundSymbol, soundSource, isLast }) => {
  const { isPlaying } = useContext(AppContext);
  const [volume, setVolume] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    const storedVolume = localStorage.getItem(soundName.en);
    if (storedVolume === null) return;
    setVolume(Number.parseInt(storedVolume));
  }, []);

  useEffect(() => {
    if (!isPlaying || volume === 0) {
      if (!playerRef.current.paused) playerRef.current.pause();
    } else {
      if (playerRef.current.paused) playerRef.current.play();
    }
    playerRef.current.volume = volume / 100;
  }, [volume, isPlaying]);

  const arabic = /^ar\b/.test(navigator.language);

  return (
    <Stack direction="column">
      <Stack spacing={2} direction="row">
        <img src={soundSymbol} alt={soundName.en} />
        <Stack width="100%" direction="column" justifyContent="end">
          <Typography variant="caption">
            {arabic ? soundName.ar : soundName.en}
          </Typography>
          <Stack spacing={2} direction="row" alignItems="center">
            <VolumeDown />
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={(e) => {
                if (Number.isNaN(e.target.value)) return;
                return setVolume(() => {
                  localStorage.setItem(soundName.en, volume);
                  return Number.parseInt(e.target.value);
                });
              }}
            />
            <VolumeUp />
          </Stack>
        </Stack>

        <audio loop ref={playerRef} hidden>
          <source src={soundSource.mp3} type="audio/mpeg" />
          <source src={soundSource.ogg} type="audio/ogg" />
          <p>
            Your browser doesn't support HTML5 <code>audio</code> element.
          </p>
        </audio>
      </Stack>
      {isLast ? null : (
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "#545454" }}
        ></div>
      )}
    </Stack>
  );
};

export default memo(Sound);
