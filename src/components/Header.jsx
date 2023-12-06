import { Link } from 'react-router-dom';
import Navigation from './Navigation';

import Grid from '@mui/material/Grid';

export default function Header() {
  return (
    <header className="header">
      <Grid container>
        <Grid item xs={4}>
      <h1>Giselle Fuselier</h1>
      </Grid>
      <Grid item xs={8} justifyContent="flex-end" alignItems="center">
      <Navigation
        links={[
          <Link key={1} className="nav-link text-light" to="/">
            about
          </Link>,
          <Link key={2} className="nav-link text-light" to="/projects">
            projects
          </Link>,
          <Link key={3} className="nav-link text-light" to="/skills">
            skills
          </Link>
        ]}
      />
      </Grid>
      
      </Grid>
    </header>
    
  );
}