import { useState, useEffect } from "react";

const Grid = (props) => {
  const [users, setUsers] = useState([]);
    const ingredientList = props.ingredientList;

 
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className="grid grid-cols-3 gap-4 place-content-center h-48 ...">

    {users}

    </div>
  );
};
export default Grid;
