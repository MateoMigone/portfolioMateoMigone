import { Box, Paper, Typography } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import React from "react";

const AboutMe = () => {
  return (
    <>
      <Box
        component="section"
        id="about-me"
        display="flex"
        justifyContent="center"
        sx={{ paddingBottom: "75px" }}
        data-aos="zoom-in"
      >
        <Paper
          elevation={8}
          sx={{
            width: "1000px",
            backgroundColor: "lightgrey",
            padding: "2.5rem 5rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "1.7rem",
              fontWeight: "bold",
              color: "dark",
              display: "flex",
              justifyContent: "center",
              gap: "1.2rem",
            }}
          >
            <AssignmentIndIcon
              color="warning"
              fontSize="large"
              sx={{ paddingTop: "2px" }}
            />{" "}
            SOBRE MI
          </Typography>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "1.2rem",
              color: "dark",
              textAlign: "justify",
            }}
          >
            Mi nombre completo es Mateo José Migone. Soy ítalo-argentino, nacido
            en la capital de Buenos Aires y viviendo desde entonces en zona
            norte. <br />
            Actualmente soy estudiante de la carrera Certified Tech Developer en
            Digital House, apasionado por la tecnología y el desarrollo de
            software. Durante mi formación previa a adentrarme en esta carrera
            realicé 3 años de ingeniería informática en la Universidad Católica
            Argentina. A lo largo de mis estudios he adquirido conocimientos en
            lenguajes de programación como HTML, CSS, JavaScript, Python, Java,
            MySQL y tecnologías como React JS, Vue JS, Git, Github y Figma.
            Tambien me introduje en algunas herramientas utiles como lo son el
            testing, las metodologías ágiles y las buenas prácticas de
            programación. Soy una persona con gran capacidad para trabajar en
            equipo, siempre dispuesto a aprender y a enfrentar nuevos desafíos.
            <br />
            Otra pasión que tengo en la vida es el deporte, especialmente el
            fútbol. Lo practico y lo veo cada vez que puedo. También disfruto
            mucho de jugar videojuegos y de ver peliculas/series.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default AboutMe;
