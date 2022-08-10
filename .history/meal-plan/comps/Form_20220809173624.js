import { useState } from "react";

const Form = (props) => {
    const [form,setForm] = useState({
        value: ''
    });

  return (

      <label>
        {props.label}
        <input
          value={form.value}
          onChange={props.}
        />
      </label>


  );
};
export default Form;