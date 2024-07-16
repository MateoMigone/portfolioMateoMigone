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
            Actualmente soy un estudiante de la carrera Certified Tech Developer
            en Digital House, apasionado por la tecnología y el desarrollo de
            software. Durante mi formación previa a adentrarme en el desarrollo
            de tecnologías en Digital House, realicé 3 años de ingeniería
            informática en la Universidad Católica Argentina. A lo largo de mis
            estudios he adquirido conocimientos en lenguajes de programación
            como JavaScript, Python, C, Java, HTML, CSS y SQL así como también
            en testing, metodologías ágiles y buenas prácticas de programación,
            aplicado tanto en programación web como en estructurada u orientada
            a objetos. Soy una persona proactiva y con capacidad para trabajar
            en equipo, siempre dispuesto a aprender y a enfrentar nuevos
            desafíos. Estoy en busca de oportunidades laborales en el campo de
            la tecnología, donde pueda aplicar mis habilidades y seguir
            desarrollándome profesionalmente.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default AboutMe;
