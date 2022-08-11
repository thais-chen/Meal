import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Grid from "../comps/Grid";
import Navbar from "../comps/Navbar";
import { useState } from "react";
import Image from "next/image";


export default function Ingredients(){
    const [form, setForm] = useState("");
     const [ingredientList, setIngredientList] = useState([]);
     const [query, setQuery] = useState("chicken");
     const [theimg, setheimg] = useState("");
     

    function handleChange(e){
      const newval = e.target.value;
           setForm({
             newval
           });
    }
    function getImgs() {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
        .then((resp) => resp.json())
        .then((data) => {
          setheimg(data);
        });
        console.log(theimg);
    }

     function click() {
         getImgs();

       }
    return (
      <>
        <Navbar page="/" />
        <Heading heading="Ingredients" info="Search by etc" />

        <Form
          label="Search Ingredients..."
          onChange={handleChange}
          value={form.value}
          clicked={click}
          imgsrc = {theimg}
        />


       </>
    )
}