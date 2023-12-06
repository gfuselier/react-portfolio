import { Link } from 'react-router-dom';
import NavLink from './Navigation';

// import Grid from '@mui/material/Grid';

// export default function Header() {
//   return (
//     <header className="header">
//       <Grid container>
//         <Grid item xs={4}>
//       <h1>Giselle Fuselier</h1>
//       </Grid>
//       <Grid item xs={8} justifyContent="flex-end" alignItems="center">
//       <Navigation
//         links={[
//           <Link key={1} className="nav-link text-light" to="/">
//             about
//           </Link>,
//           <Link key={2} className="nav-link text-light" to="/projects">
//             projects
//           </Link>,
//           <Link key={3} className="nav-link text-light" to="/skills">
//             skills
//           </Link>
//         ]}
//       />
//       </Grid>
      
//       </Grid>
//     </header>
    
//   );
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = [{text:'About', path:'/'}, {text: 'Projects', path: '/projects'}, {text:"Skills", path: '/skills'}];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Giselle Fuselier
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={<Link to={item.path}>
            {item.text}
           </Link>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // const navlink = () => (
  //   <Link to={path}>
  //   {text}
  //  </Link>
  // )

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Giselle Fuselier
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.text} sx={{ color: '#fff' }} >
                <Link to={item.path}>
    {item.text}
   </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}


export default Header;