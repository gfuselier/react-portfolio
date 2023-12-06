
export default function Navigation({ links }) {
    return (
      <nav className="navbar" justifyContent="flex-end" alignItems="center">
            <ul className="nav-list">
              {links.map((link) => link)}
            </ul>
      </nav>
    );
  }