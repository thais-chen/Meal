import { useState } from "react";

const Form = (props) => {
    const [form,setForm] = useState({
        value: ''
    });

  return (
    <>
      <label>
        {props.label}
        <input value={props.value} onChange={props.onChange} />
      </label>
      <button onClick={props.clicked}>Submit</button>
    
      <p>{imgsrc}</p>
    </>
  );
};
export default Form;