import Logo from "./Logo";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <nav className="bg-gray-800 border-gray-200 px-2 py-2.5 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Logo />
        <MenuItem />
      </div>
    </nav>
  );
};

export default Header;
