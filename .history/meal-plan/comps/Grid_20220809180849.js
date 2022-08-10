import { useState, useEffect } from "react";

const Grid = (props) => {
  const [users, setUsers] = useState([]);
    const ingredientList = props.ingredientList;

  const fetchData = () => {
    ingredientList.map((each) =>{
         fetch(`www.themealdb.com/images/ingredients/${each}.png`)
           .then((response) => {
             return response.json();
           })
           .then((data) => {
             setUsers(data);
           });
    })

  };
  return (
    <div className="grid grid-cols-3 gap-4 place-content-center h-48 ...">
      <button onClick={fetchData}>Fetch Users</button>
        <ul>
          {users.map((user) => (
            <li >{user}</li>
          ))}
        </ul>


    </div>
  );
};
export default Grid;
