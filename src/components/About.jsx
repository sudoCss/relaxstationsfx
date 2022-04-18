import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import Github from "@mui/icons-material/GitHub";
import Facebook from "@mui/icons-material/Facebook";
import Reddit from "@mui/icons-material/Reddit";
import Email from "@mui/icons-material/Email";
import Telegram from "@mui/icons-material/Telegram";

const About = ({ isAboutOpen, handleClick }) => {
  const arabic = /^ar\b/.test(navigator.language);
  return (
    <Dialog open={isAboutOpen} onBackdropClick={handleClick}>
      <Stack paddingX={4} paddingY={1} alignItems={"center"}>
        <DialogTitle>Relax Station SFX</DialogTitle>
        <DialogContent>
          <Stack alignItems={"center"} spacing={3} direction={"column"}>
            {arabic ? (
              <Typography sx={{ direction: "rtl" }}>
                هذا المشروع هو نسخة من برنامج{" "}
                <Link
                  href="https://github.com/rafaelmardojai/blanket/"
                  target="_blank"
                >
                  <strong>Blanket</strong>
                </Link>{" "}
                صنع لأغراض تعليمية و تدريبية.
              </Typography>
            ) : (
              <Typography>
                This project is a clone of{" "}
                <Link
                  href="https://github.com/rafaelmardojai/blanket/"
                  target="_blank"
                  title="The cloned app"
                >
                  <strong>Blanket</strong>
                </Link>{" "}
                app made for educational and training purposes.
              </Typography>
            )}
            <Stack direction={"row"} spacing={2}>
              <Link
                href="https://github.com/sudoCss/relaxstationsfx"
                target="_blank"
                title="Source Code"
              >
                <Github />
              </Link>
              <Link
                href="https://www.facebook.com/sudoCss.hamza/"
                target="_blank"
                title="My Facebook"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.reddit.com/user/sudoCss"
                target="_blank"
                title="My Reddit"
              >
                <Reddit />
              </Link>
              <Link
                href="https://t.me/sudoCss"
                target="_blank"
                title="My Telegram"
              >
                <Telegram />
              </Link>
              <Link
                href="mailto:alkalash.hamza@gmail.com"
                target="_blank"
                title="My Email"
              >
                <Email />
              </Link>
            </Stack>
          </Stack>
        </DialogContent>
      </Stack>
    </Dialog>
  );
};

export default About;
