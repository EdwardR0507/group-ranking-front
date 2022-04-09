import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import AddGroup from "../components/AddGroup";
import GroupList from "../components/GroupList";

const connectSocketServer = () => {
  const socket = io("http://localhost:4000", {
    transports: ["websocket"],
  });
  return socket;
};

const Home = () => {
  const [socket] = useState(connectSocketServer);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

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
