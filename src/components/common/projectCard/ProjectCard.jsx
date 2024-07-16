import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <CardMedia
          component="img"
          alt={project.name + " preview"}
          height="250"
          image={project.img}
        />
        <CardContent>
          <Typography variant="h5" component="div" fontWeight="bold">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <a href={project.url} target="blank">
          <Button size="medium" variant="contained">
            Visitar sitio
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
