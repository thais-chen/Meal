import { useState } from "react";

const Form = (props) => {
  return (
    <>
      <label>
        {props.label}
        <input value={props.value} onChange={props.onChange} />
        <button onClick={props.clicked}>dad </button>
      </label>
    </>
  );
};
export default Form;