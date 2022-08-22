import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
const Form = (props) => {
  return (
    <div className="pt-3 flex">
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="w-5/6 border-b-2 border-gray-400 focus:outline-none focus:border-gray-500"
      />

      <button onClick={props.clicked} className="ml-5">
        {" "}
        <FontAwesomeIcon icon={props.icon} />{" "}
      </button>
    </div>
  );
};
export default Form;