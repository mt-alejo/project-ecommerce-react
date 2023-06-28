import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";

let optionsLeft = [
  {
    to: "/",
    text: "All",
    className: "",
  },
  {
    to: "/clothes",
    text: "Clothes",
    className: "",
  },
  {
    to: "/electronics",
    text: "Electronics",
    className: "",
  },
  {
    to: "/furniture",
    text: "Furnitures",
    className: "",
  },
  {
    to: "/toys",
    text: "Toys",
    className: "",
  },
  {
    to: "/others",
    text: "Others",
    className: "",
  },
];

let optionsRight = [
  {
    to: "/my-orders",
    text: "My orders",
    className: "",
  },
  {
    to: "/my-account",
    text: "My account",
    className: "",
  },
  {
    to: "/sign-in",
    text: "Sign In",
    className: "",
  },
];

// eslint-disable-next-line react/prop-types
function NavItem({ to, children, activeStyle }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
}

function Navbar() {
  const { shoppingCounter } = useContext(ShoppingCartContext);
  let activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm bg-white nav-text ">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavItem to={"/"}>LOGO</NavItem>
        </li>

        {optionsLeft.map((option) => {
          return (
            <li key={option.text}>
              <NavItem to={option.to} activeStyle={activeStyle}>
                {option.text}
              </NavItem>
            </li>
          );
        })}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">example@gmail.com</li>
        {optionsRight.map((option) => {
          return (
            <li key={option.text}>
              <NavItem to={option.to} activeStyle={activeStyle}>
                {option.text}
              </NavItem>
            </li>
          );
        })}
        <li>
          <NavItem to={"/shop-cart"}>
            <div className="flex items-center gap-1">
              <FaShoppingCart />
              <span className="button__badge">{shoppingCounter}</span>
            </div>
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
