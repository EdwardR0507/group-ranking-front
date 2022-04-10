import { useContext } from "react";
import AddGroup from "../components/AddGroup";
import ChartGroup from "../components/ChartGroup";
import GroupList from "../components/GroupList";
import { SocketContext } from "../context/SocketContext";

const Home = () => {
  const { online } = useContext(SocketContext);

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service Status:
          {online ? (
            <span className="text-success"> Online </span>
          ) : (
            <span className="text-danger"> Offline </span>
          )}
        </p>
      </div>
      <h1>Ranking Groups</h1>
      <hr />
      <div className="row">
        <div className="col">
          <ChartGroup />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <GroupList />
        </div>
        <div className="col-4">
          <AddGroup />
        </div>
      </div>
    </div>
  );
};

export default Home;
