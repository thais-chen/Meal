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
            value={form}/>
      </label>
    </div>
  );
};
