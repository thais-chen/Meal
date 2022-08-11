import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Grid from "../comps/Grid";
import Navbar from "../comps/Navbar";
import { useState } from "react";


export default function Ingredients(){
    const [form, setForm] = useState("");
     const [ingredientList, setIngredientList] = useState([]);
     const [query, setQuery] = useState("")
    function handleChange(e){
           setForm({
             ...form,
             value: e.target.value,
           });
    }

    const getImg = async() => {
      const response = await fetch(
        `www.themealdb.com/images/ingredients/${query}.png`
      );
      const data = await response.json();
    }
       function click() {
         getImg();
         setIngredientList((ingredientList) => [...ingredientList, data]);
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