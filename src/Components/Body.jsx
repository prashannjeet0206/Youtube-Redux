import MainComponent from "./MainCompo";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex flex-row mt-[80px] overflow-y-auto h-[calc(100vh-80px)]">
      {/* sidebar */}
      <Sidebar />
      {/* main */}
      <MainComponent />
    </div>
  );
};

export default Body;
