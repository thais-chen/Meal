import { useState } from "react";

const Form = (props) => {
    const [form,setForm] = useState({
        value: ''
    });

  return (
    <label>
      {props.label}
      <input value={props.value} onChange={props.onChange} />
    </label>
    <button> </button>
  );
};
export default Form;