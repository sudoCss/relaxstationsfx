import { useContext, memo } from "react";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import PlayArrow from "@mui/icons-material/PlayArrow";
import PauseRounded from "@mui/icons-material/PauseRounded";
import SoundsContainer from "./SoundsContainer";
import { AppContext } from "../App";
import Header from "./Header";

import data from "../data";

const Main = () => {
  const { isPlaying, setIsPlaying } = useContext(AppContext);

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      marginTop={2}
      marginBottom={12}
    >
      <Header />
      <SoundsContainer data={data} />
      <Fab
        sx={{ position: "fixed", bottom: "1rem" }}
        color="primary"
        onClick={() => setIsPlaying((prevIsState) => !prevIsState)}
      >
        {isPlaying ? <PauseRounded /> : <PlayArrow />}
      </Fab>
    </Stack>
  );
};

export default memo(Main);
