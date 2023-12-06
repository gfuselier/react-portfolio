import { FaGithub } from "react-icons/fa";

// function Project({ project }) {
//   return (
//     <div className="card" key={project.id}>
//       <img className="card-img-top" src={project.image} alt={project.title} height="200px" width="200px"/>
//       <div className="card-body">
//         <a href={project.deployed}>
//           <h3 className="card-title">{project.title}</h3>
//         </a>
//         <p className="card-text">{project.languages}</p>
//         <a href={project.github} type="button" className="btn btn-light">
//           <FaGithub />
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Project;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Project({ project }) {
  return (
    <Card key={project.id}>
      <CardActionArea href={project.deployed} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.languages}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" href={project.github} target="_blank" rel="noopener noreferrer" size="small">
          Github
        </Button>
      </CardActions>
    </Card>
  );
}
