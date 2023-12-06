import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="sm" component='main' sx={{m: 3, mt: 15 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;