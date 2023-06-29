import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex w-full">
      <nav className="flex justify-between w-full">
        <ul className="flex">
          <li className="w-16 mm:w-20">
            <Link to={"/"}>
              <img
                className="w-full h-full object-contain"
                src="/pictures/png/icon-ecommerce.png"
              />
            </Link>
          </li>
        </ul>
        <ul className="flex items-center justify-center text-gray-400 text-4xl mm:text-5xl mm:gap-4 gap-2">
          <li className="cursor-pointer">
            <Link to={"/register"}>
              <i className="bx bx-user-plus"></i>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/login"}>
              <i className="bx bxs-user-detail"></i>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/purchases"}>
              <i className="bx bx-box"></i>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/cart"}>
              <i className="bx bx-cart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
