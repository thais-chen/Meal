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
    imgArr.map((item) => {
       fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${chicken_breast}`)
         .then((resp) => resp.json())
         .then((data) => {
           setheimg(data.meals);
         });
    })

        setImgArr(oldArray => [...oldArray, form]);
    console.log(imgArr);
    console.log(theimg);
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
