import Stack from "@mui/material/Stack";
import { useState } from "react";
import Logo from "../assets/icons/nature/wave-symbolic.svg";
import AboutBtn from "./AboutBtn";
import About from "./About";

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleClick = () => setIsAboutOpen((prevState) => !prevState);

  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      width={"100%"}
      paddingX={2}
    >
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <AboutBtn handleClick={handleClick} />
      {isAboutOpen ? <About isAboutOpen handleClick={handleClick} /> : null}
    </Stack>
  );
};

export default Header;
