import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Navbar from "../comps/Navbar";
import { useState } from "react";

export default function Ingredients() {
  const [form, setForm] = useState("");
  const [theimg, setheimg] = useState({});
  const initialImgArr = [
    {
      id: 1,
      name: "apple",
      url: "https://www.themealdb.com/images/ingredients/apple.png",
    },
  ];
  const [imgArr, setImgArr] = useState(initialImgArr);

  function handleChange(e) {
    setForm(e.target.value);
  }
  const addObj = (obj) => {
    setImgArr((current) => [...current, obj]);
  };
  function getImgs() {
    fetch(`https://www.themealdb.com/images/ingredients/${form}.png`)
      .then((resp) => resp)
      .then((data) => {
        addObj({
          id: Math.random(),
          name: form,
          url: theimg,
        });
      });
    console.log(theimg);
  }

  const thingsElements = imgArr.map((thing) => {
    
  }

    return(
      <div key = {thing.id}>
        <p> {thing.url}</p>
        <p>{thing.name}</p>
    </div>
     )

  ));

  return (
    <>
      <Navbar page="/" />
      <Heading heading="Ingredients" info="Search by etc" />
      <Form
        label="Search Ingredients..."
        onChange={handleChange}
        value={form.value}
        imgsrc={theimg}
      />
      <button
        onClick={() => {
          getImgs();
          setImgArr((oldArray) => [...oldArray, form]);
        }}
      >
        Search
      </button>
      {/* create img div */}
      {thingsElements}
    </>
  );
}
