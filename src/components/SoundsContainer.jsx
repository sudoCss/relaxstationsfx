import { memo } from "react";
import Stack from "@mui/material/Stack";
import SoundsGroup from "./SoundsGroup";

const SoundsContainer = ({ data }) => {
  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{
        minWidth: "240px",
        width: "80%",
        maxWidth: "600px",
      }}
    >
      {data.map((group) => {
        return <SoundsGroup key={group.id} {...group} />;
      })}
    </Stack>
  );
};

export default memo(SoundsContainer);
