import { useEffect, useState } from "react";

export const useGroups = (socket) => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    socket.on("current-groups", (groups) => {
      setGroups(groups);
    });
    return () => socket.off("current-groups");
  }, [socket]);
  return { groups, setGroups };
};
