import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

const AddGroup = () => {
  const [groupName, setGroupName] = useState("");
  useContext;
  const { socket } = useContext(SocketContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName.trim().length > 0) {
      socket.emit("add-group", groupName);
      setGroupName("");
    }
  };
  return (
    <>
      <h2>Add Group </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Group Name"
          className="form-control"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </form>
    </>
  );
};

export default AddGroup;
