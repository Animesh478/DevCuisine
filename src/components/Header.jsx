import { useSelector } from "react-redux";
import NavItem from "./navbar/NavItem";

function Header() {
  const items = useSelector((state) => state.cart.items);
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
          <NavItem name="Home" path="/" />
          <NavItem name="About Us" path="/about" />
          <NavItem name="Contact Us" path="/contact" />
          <NavItem name="Cart" path="/cart">
            ({items.length})
          </NavItem>
        </ul>
      </div>
    </div>
  );
}

export default Header;
