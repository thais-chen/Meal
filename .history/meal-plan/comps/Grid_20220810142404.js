import { useState, useEffect } from "react";

const Grid = (props) => {



  return (
    <div className="grid grid-cols-3 gap-4 place-content-center h-48 ...">
      {props.ingredientList.map()}
    </div>
  );
};
export default Grid;
