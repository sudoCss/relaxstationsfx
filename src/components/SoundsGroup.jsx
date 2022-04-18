import { memo } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Sound from "./Sound";

const SoundsGroup = ({ name, sounds }) => {
  const arabic = /^ar\b/.test(navigator.language);
  return (
    <Stack direction="column">
      <Typography
        variant="h5"
        align={arabic ? "right" : "left"}
        sx={{ marginBottom: "0.5rem" }}
      >
        {arabic ? name.ar : name.en}
      </Typography>
      <Stack
        direction="column"
        spacing={2}
        bgcolor="#333333"
        padding={2}
        borderRadius={3}
      >
        {sounds.map((sound, index) => {
          return (
            <Sound
              key={sound.soundId}
              {...sound}
              isLast={index === sounds.length - 1}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default memo(SoundsGroup);
