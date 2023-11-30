import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="header">
      <h1>Giselle Fuselier</h1>
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
    </header>
  );
}