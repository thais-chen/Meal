import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Grid from "../comps/Grid";
import Navbar from "../comps/Navbar";
import { useState } from "react";

export default function Ingredients() {
  const [form, setForm] = useState("");
  const [theimg, setheimg] = useState([]);
  const [imgArr,setImgArr] = useState([])

  function handleChange(e) {
  setForm(e.target.value)


  }

  function getImgs() {
    imrArr.map((item) => {

    })

        setImgArr(oldArray => [...oldArray, form]);
    console.log(imgArr);
    console.log(theimg[0].strArea);
  }


  return (
    <>
      <Navbar page="/" />
      <Heading heading="Ingredients" info="Search by etc" />

      <Form
        label="Search Ingredients..."
        onChange={handleChange}
        value={form.value}
        clicked={getImgs}
        imgsrc={theimg}
      />
    </>
  );
}
