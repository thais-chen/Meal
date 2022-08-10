import { useState } from "react";

const Form = (props) => {
    const [form,setForm] = useState({
        first: '',
        second: '',
        third: ''
    });
  return (
    <div>
      <label>
        <input
            value={form.first}
            onChange={e => {
                setForm({
                    ...form,
                    first: e.target.value
                }/>
      </label>
    </div>
  );
};
