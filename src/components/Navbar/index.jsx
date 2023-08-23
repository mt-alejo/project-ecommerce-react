import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import "./styles.css";
import ShoppingCart from "../ShoppingCart";
import SignIn from "../../pages/SignIn";

let optionsLeft = [
  {
    to: "/",
    text: "All",
    className: "",
  },
  {
    to: "/category/clothes",
    text: "Clothes",
    className: "",
  },
  {
    to: "/category/electronics",
    text: "Electronics",
    className: "",
  },
  {
    to: "/category/furniture",
    text: "Furnitures",
    className: "",
  },
  {
    to: "/category/toys",
    text: "Toys",
    className: "",
  },
  {
    to: "/category/others",
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
  // {
  //   to: "/sign-in",
  //   text: "Sign Out",
  //   className: "",

  // },
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
  const {
    setSignOut,
    signOut,
    parsedSignOut,
    isUserSignOut,
    account,
    hasUserAccount,
  } = useContext(ShoppingCartContext);
  let activeStyle = "underline underline-offset-4";

  function handleSignOut() {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    setSignOut(true);
  }

  function renderView() {
    if (isUserSignOut) {
      return;
    }

    return optionsRight.map((option) => {
      return (
        <li key={option.text}>
          <NavItem to={option.to} activeStyle={activeStyle}>
            {option.text}
          </NavItem>
        </li>
      );
    });
  }
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
        {isUserSignOut ? (
          ""
        ) : (
          <li className="text-black/60">{account?.email}</li>
        )}
        {renderView()}
        <li>
          <NavLink
            to={"/sign-in"}
            // className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            {parsedSignOut ? "Sign In" : "Sign Out"}
          </NavLink>
        </li>
        <li>
          <NavItem to={"/shop-cart"}>
            <ShoppingCart />
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}

//PENDING: "Sign in" avaible to modify the account in Local Storage

export default Navbar;