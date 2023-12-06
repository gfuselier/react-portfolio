
export default function NavLink({ text, path }) {
    return (
      <Link to={path}>
            {text}
           </Link>
    );
  }