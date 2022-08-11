import { useState } from "react";

const Form = (props) => {


  return (
    <>
      <label>
        {props.label}
        <input value={props.value} onChange={props.onChange} />
      </label>
      <button onClick={props.clicked}>Submit</button>
     </>
  );
};
export default Form;