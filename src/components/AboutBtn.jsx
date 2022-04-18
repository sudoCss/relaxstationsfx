import InfoOutlined from "@mui/icons-material/InfoOutlined";
import Button from "@mui/material/Button";

const AboutBtn = ({ handleClick }) => {
  return (
    <Button sx={{ borderRadius: "50%" }} onClick={handleClick}>
      <InfoOutlined fontSize="large" />
    </Button>
  );
};

export default AboutBtn;
