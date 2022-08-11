import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Grid from "../comps/Grid";
import Navbar from "../comps/Navbar";
import { useState } from "react";


export default function Ingredients(){
    const [form, setForm] = useState("");
     const [ingredientList, setIngredientList] = useState([]);
     const [query, setQuery] = useState("chicken")

    function handleChange(e){
      const newval = e.target.value;
           setForm({
             newval
           });
    }
    function getImgs() {
      fetch(`www.themealdb.com/images/ingredients/${query}.png`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
        })
    }
    const getImg = async() => {
      const response = await fetch(
        `www.themealdb.com/images/ingredients/${query}.png`
      );
      const data = await response.json();
      setIngredientList((ingredientList) => [...ingredientList, data]);

    }
     function click() {
         getImg();
          console.log(form);
       }
    return (
      <>
        <Navbar page="/" />
        <Heading heading="Ingredients" info="Search by etc" />

          <Form label="Search Ingredients..."
            onChange = {handleChange}
            value = {form.value}
            clicked = {click} />
        <Grid ingredientList= {ingredientList} />


      </>
    );
}