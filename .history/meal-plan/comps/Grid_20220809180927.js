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
