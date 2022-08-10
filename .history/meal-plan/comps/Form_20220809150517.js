import { useState } from "react";

const Form = (props) => {
    const [form,setForm] = useState({
        first: '',
        second: '',
        third: ''
    });


  return (

      <label>
        {props.label}
        <input
          value={form.value}
          onChange={(e) => {
            setForm({
              ...form,
              first: e.target.value,
            });
          }}
        />
      </label>


  );
};
export default Form;