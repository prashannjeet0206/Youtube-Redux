import MainComponent from "./MainCompo";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      {/* sidebar */}
      <Sidebar />
      {/* main */}
      <MainComponent />
    </div>
  );
};

export default Body;
