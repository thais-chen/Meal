import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Grid from "../comps/Grid";
import Navbar from "../comps/Navbar";
import { useState } from "react";


export default function Ingredients(){
    const [form, setForm] = useState({
      value: "",
    });
    function handleChange(){
        
    }

    return (
      <>
        <Navbar page="/" />
        <Heading heading="Ingredients" info="Search by etc" />
        <>
          <Form label="Search Ingredients..." />

        </>
      </>
    );
}