import { useState } from "react";

const Form = (props) => {
    const [form,setForm] = useState({
        first: '',
        second: '',
        third: ''
    });

    function createInput()
  return (
    <div>
      <label>
        {props.labelOne}
        <input
          value={form.first}
          onChange={(e) => {
            setForm({
              ...form,
              first: e.target.value,
            });
          }}
        />
      </label>
      <label>
        {props.labelTwo}
        <input
          value={form.first}
          onChange={(e) => {
            setForm({
              ...form,
              second: e.target.value,
            });
          }}
        />
      </label>
    </div>
  );
};
export default Form;