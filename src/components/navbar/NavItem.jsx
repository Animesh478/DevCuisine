function NavItem({ name }) {
  return (
    <li className="hover:text-amber-600 hover:cursor-pointer font-medium">
      {name}
    </li>
  );
}

export default NavItem;
