import React from "react";

const GroupList = () => {
  const createRows = () => {
    return (
      <tr>
        <td>
          <button className="btn btn-primary">+1</button>
        </td>
        <td>
          <input type="text" />
        </td>
        <td>15</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  };
  return (
    <>
      <h2>Top Groups</h2>
      <table className="table table-stripped">
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
