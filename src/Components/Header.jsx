import { FaHamburger } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import utube from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../State/MenuSlice";

const Header = () => {
  const dispatch = useDispatch();

  function handleToggleMenu() {
    dispatch(toggleMenu());
  }

  return (
    <div className="border-2 border-black flex items-center gap-4 p-4">
      {/* toggle menu */}
      <FaHamburger
        size={30}
        onClick={handleToggleMenu}
        className="cursor-pointer"
      />

      {/* logo */}
      <img src={utube} alt="youtube-logo" className="h-12 w-30 rounded-lg" />

      {/* search-bar with icon inside */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <BsSearch />
        </span>
      </div>

      {/* profile */}
      <FaUserLarge size={24} />
    </div>
  );
};

export default Header;
