import { Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <nav
      style={{
        padding: "12px 50px",
        backgroundColor: "#1976D2",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: "1.7rem",
            fontWeight: "bold",
          }}
        >
          MATEO MIGONE
        </Typography>
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <a href="#portfolio">
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#00b0ff" }}
            >
              Portfolio
            </Button>
          </a>
          <a href="#about-me">
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#00b0ff" }}
            >
              Sobre mi
            </Button>
          </a>
        </Box>
      </Toolbar>
    </nav>
  );
};

export default NavBar;
