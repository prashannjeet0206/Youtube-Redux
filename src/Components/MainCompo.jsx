import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainComponent = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto flex-1">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainComponent;
