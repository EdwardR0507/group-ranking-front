import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { useGroups } from "../hooks/useGroups";

const GroupList = () => {
  const { socket } = useContext(SocketContext);
  const { groups, setGroups } = useGroups(socket);

  const vote = (id) => {
    socket.emit("vote", id);
  };

  const remove = (id) => {
    socket.emit("remove", id);
  };

  const updateName = (id, name) => {
    socket.emit("update-name", { id, name });
  };

  const handleEdit = (e, id) => {
    const newName = e.target.value;
    const newGroups = groups.map((group) => {
      if (group.id === id) {
        group.name = newName;
      }
      return group;
    });
    setGroups(newGroups);
  };

  const handleBlur = (id, name) => {
    updateName(id, name);
  };

  const createRows = () => {
    return groups.map((group) => (
      <tr key={group.id}>
        <td>
          <button className="btn btn-primary" onClick={() => vote(group.id)}>
            +1
          </button>
        </td>
        <td>
          <input
            type="text"
            value={group.name}
            onChange={(e) => handleEdit(e, group.id)}
            onBlur={() => handleBlur(group.id, group.name)}
          />
        </td>
        <td>{group.votes}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              remove(group.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <h2>Top Groups</h2>
      <table className="table table-stripped text-center">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Votes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};

export default GroupList;
