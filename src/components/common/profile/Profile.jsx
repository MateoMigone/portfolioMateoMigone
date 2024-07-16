import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
      paddingBottom="50px"
    >
      <Avatar
        alt="Foto de perfil"
        src="/assets/fotoPerfilLinkedIn.jpeg"
        sx={{ width: 250, height: 250 }}
      />
      <Box padding="1rem 2rem" border="1px dashed grey" borderRadius="0.3rem">
        <Typography
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: "1.7rem",
            textAlign: "center",
          }}
        >
          MATEO MIGONE
        </Typography>
        <Typography
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: "1rem",
          }}
        >
          Estudiante de Certified Tech Developer en Digital House
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
