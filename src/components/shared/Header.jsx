import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex tp:border-2 w-full tp:row-start-1 tp:row-end-2 fixed bg-white z-10 tp:col-start-1 tp:col-end-7">
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
        <ul className="flex items-center justify-center text-gray-400 text-4xl mm:text-5xl mm:gap-12 tp:gap-0 gap-6 mr-2 mg:gap-24">
          <li className="cursor-pointer tp:border-l-2 tp:h-full tp:flex tp:place-items-center tp:px-20">
            <Link to={"/register"}>
              <i className="bx bx-user-plus"></i>
            </Link>
          </li>
          <li className="cursor-pointer tp:border-l-2 tp:h-full tp:flex tp:place-items-center tp:px-20">
            <Link to={"/login"}>
              <i className="bx bxs-user-detail"></i>
            </Link>
          </li>
          <li className="cursor-pointer tp:border-l-2 tp:h-full tp:flex tp:place-items-center tp:px-20">
            <Link to={"/purchases"}>
              <i className="bx bx-box"></i>
            </Link>
          </li>
          <li className="cursor-pointer tp:border-l-2 tp:h-full tp:flex tp:place-items-center tp:px-20">
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
