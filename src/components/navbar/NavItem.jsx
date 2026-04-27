import { Link } from "react-router-dom";

function NavItem({ name, path, children }) {
  return (
    <li className="hover:text-amber-600 hover:cursor-pointer font-medium">
      <Link to={path}>
        {name}
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
