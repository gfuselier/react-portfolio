
export default function Navigation({ links }) {
    return (
      <nav className="navbar" justifycontent="flex-end" alignitems="center">
            <ul className="nav-list">
              {links.map((link) => link)}
            </ul>
      </nav>
    );
  }