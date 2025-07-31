const CollapseMenu = () => {
  return (
    <div className="flex flex-col items-center pt-10 mr-5 h-[500px] shadow-lg">
      <ul className="leading-loose font-bold text-xl">
        <li className="hover:bg-gray-200 rounded-md p-2 text-center cursor-pointer">
          Home
        </li>
        <li className="hover:bg-gray-200 rounded-md p-2 text-center cursor-pointer">
          Shorts
        </li>
        <li className="hover:bg-gray-200 rounded-md p-2 text-center cursor-pointer">
          Subscription
        </li>
      </ul>
    </div>
  );
};

export default CollapseMenu;
