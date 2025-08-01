import { useSelector } from "react-redux";
import CollapseMenu from "./CollapseMenu";

const Sidebar = () => {
  const selector = useSelector((store) => store.menu.isOpen);

  if (!selector) {
    return <CollapseMenu />;
  }

  return (
    <div className="w-[250px] h-[calc(100vh-80px)] overflow-y-hidden hover:overflow-y-auto shadow-lg flex flex-col items-center">
      <div>
        <ul className="leading-10 font-bold">
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>
      </div>
      <hr className="w-full border-t border-gray-300 my-4" />
      <div>
        <div className="-ml-10">
          <h1 className="font-bold text-xl">Explore</h1>
        </div>
        <ul className="leading-10 font-bold">
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion</li>
          <li>Podcast</li>
        </ul>
      </div>
      <hr className="w-full border-t border-gray-300 my-4" />
      <div>
        <ul className="leading-10 font-bold">
          <li>Settings</li>
          <li>History</li>
          <li>Help</li>
          <li>Feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
