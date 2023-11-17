import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const data = useContext(UserContext);

  return (
    <div className="flex justify-between items-center bg-gray-50 shadow-md p-2">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="w-16" />
      </div>
      <div>
        <ul className="flex mr-4">
          <li className="px-2 text-sm md:text-base cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 text-sm md:text-base cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 text-sm md:text-base cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 text-sm md:text-base cursor-pointer">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="px-2 text-sm md:text-base text-green-400 cursor-pointer"
            onClick={() =>
              login === "Login" ? setLogin("Logout") : setLogin("Login")
            }
          >
            {login}
          </button>
          <li className="px-2 text-sm md:text-base cursor-pointer">
            {data.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
