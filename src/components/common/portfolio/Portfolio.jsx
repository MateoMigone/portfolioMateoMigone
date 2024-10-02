import { Box, Grid, Typography } from "@mui/material";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import React from "react";
import ProjectCardContainer from "../projectCard/ProjectCardContainer";

const Portfolio = () => {
  return (
    <Box
      component="section"
      id="portfolio"
      padding="4rem"
      display="flex"
      flexDirection="column"
      gap="4rem"
      sx={{ backgroundColor: "lightgrey" }}
    >
      <Typography
        component="div"
        sx={{
          flexGrow: 1,
          fontSize: "1.7rem",
          fontWeight: "bold",
          color: "#000000DE",
          display: "flex",
          justifyContent: "center",
          gap: "1.2rem",
        }}
      >
        <FolderCopyIcon
          color="info"
          fontSize="large"
          sx={{ paddingTop: "2px" }}
        />
        PORTFOLIO
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          display="flex"
          gap="3rem"
          flexWrap="wrap"
          justifyContent="center"
          maxWidth="1200px"
        >
          <ProjectCardContainer
            name="Ortesys 3D"
            img="/assets/ortesysPreview.png"
            description="Frontend realizado para el proyecto de software de Ortesys 3D. Consta de una interfaz para facilitarle el proceso de impresión de ortesis a los médicos y el proceso de gestión a los administradores. Las principales tecnologías utilizadas son Nuxt JS, Vue JS y Tailwind CSS."
            url="https://ortesys.vercel.app/"
          />

          <ProjectCardContainer
            name="Fly Mountain"
            img="/assets/flyMountain.png"
            description="Trabajé con mi equipo bajo metodologías ágiles para desarrollar una página web que sirve como sistema de reservas para las diferentes actividades que se ofrecen en un centro de slackline. Utilizamos React.js y Bootstrap para el frontend, Node.js, Express.js y prisma para el backend, MySql para la base de datos y AWS S3 y AWS EC2 para la infraestructura."
            url="http://fly-mountain-app.s3-website.us-east-2.amazonaws.com/"
          />

          <ProjectCardContainer
            name="Futbol retro"
            img="/assets/futbolRetroPreview.png"
            description="Un ecommerce realizado con react js, estilada con css y librerías como material ui y sweet alert, complementado con el uso de formik y yup para validaciones y la incorporación de firebase para el manejo de la base de datos."
            url="https://ecommerce-futbol-retro.vercel.app/"
          />

          <ProjectCardContainer
            name="Stopwatch"
            img="/assets/stopwatchPreview.png"
            description="Una página web que ofrece la funcionalidad de un cronómetro. Desarrollado con React JS y estilado con CSS."
            url="https://stopwatch-react-kappa.vercel.app/"
          />

          <ProjectCardContainer
            name="Sportique"
            img="/assets/sportiquePreview.png"
            description="Ecommerce deportivo desarrollado con Javascript Vanila y estilado con CSS."
            url="https://ecommerce-sportique.vercel.app/"
          />

          <ProjectCardContainer
            name="Sportit"
            img="/assets/sportitPreview.png"
            description="Maqueta de pagina web de información deportiva. Desarrollado con HTML y CSS."
            url="https://mateomigone.github.io/proyectoSportit/"
          />

          <ProjectCardContainer
            name="E-Sports Hub"
            img="/assets/eSportsHubPreview.png"
            description="Maqueta de red social de gaming. Desarrollado con HTML y CSS."
            url="https://mateomigone.github.io/maquetaEsportsHub/"
          />

          <ProjectCardContainer
            name="Dental Clinic"
            img="/assets/dentalClinicPreview.png"
            description="Página web de clínica dental que permite agregar dentistas a favoritos y verlos en detalle. También permite cambiar el tema entre claro y oscuro. Desarrollado con React JS y CSS."
            url="https://dental-clinic-favs.vercel.app/"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
