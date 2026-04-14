import NavItem from "./navbar/NavItem";

function Header() {
  return (
    <div className="flex justify-between items-center shadow-lg px-12 py-2">
      <div>
        <h2 className="font-roboto">
          <span className="text-3xl text-amber-600 font-bold ">Dev</span>
          <span className="text-3xl text-stone-500  font-bold">Cuisine</span>
        </h2>
      </div>
      <div>
        <ul className="flex gap-10 ">
          <NavItem name="Home" />
          <NavItem name="About Us" />
          <NavItem name="Contact Us" />
          <NavItem name="Cart" />
        </ul>
      </div>
    </div>
  );
}

export default Header;
