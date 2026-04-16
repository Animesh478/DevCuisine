import { Link } from "react-router-dom";

function NavItem({ name, path }) {
  return (
    <li className="hover:text-amber-600 hover:cursor-pointer font-medium">
      <Link to={path}>{name}</Link>
    </li>
  );
}

export default NavItem;
