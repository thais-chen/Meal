import { useState, useEffect } from "react";
import Link from "next/link";

const Grid = (props) => {



  return (
    <div className="grid grid-cols-3 gap-4 place-content-center h-48 ...">
      {props.ingredientList.map((x) => {
        <Link href={x}> </Link>
      })}
    </div>
  );
};
export default Grid;
