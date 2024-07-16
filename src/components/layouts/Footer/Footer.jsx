import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="2.5rem"
      padding="1.5rem"
      sx={{ backgroundColor: "#091f38" }}
    >
      <a
        href="https://github.com/MateoMigone"
        target="blank"
        style={{ color: "white" }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "1.7rem",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <GitHubIcon />
          MateoMigone
        </Typography>
      </a>

      <Typography
        component="div"
        sx={{
          fontSize: "1.7rem",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <EmailIcon />
        mateomigone01@gmail.com
      </Typography>

      <a
        href="https://www.linkedin.com/in/mateo-migone/"
        target="blank"
        style={{ color: "white" }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "1.7rem",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <LinkedInIcon />
          mateo-migone
        </Typography>
      </a>
    </Box>
  );
};

export default Footer;
