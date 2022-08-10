import React, { useState } from "react";

const Grid = (props) => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  return (
    <div className="grid grid-cols-3 gap-4 place-content-center h-48 ...">
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  );
};
export default Grid;
