import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Navbar from "../comps/Navbar";
import { useState } from "react";


export default function Ingredients() {
  const [form, setForm] = useState("");
  const [theimg, setheimg] = useState({});
  const [imgArr, setImgArr] = useState([]);
  const initialImgArr = [
    {
      id: 1,
      name: "apple",
      url: "https://www.themealdb.com/images/ingredients/apple.png"
    },
  ];

  function handleChange(e) {
    setForm(e.target.value);
  }
  const addObj = obj => {
    setImgArr(current => )
  }
  function getImgs() {
    fetch(`https://www.themealdb.com/images/ingredients/${form}.png`)
      .then((resp) => resp)
      .then((data) => {
        setheimg(data);
      });

  }

  const thingsElements = imgArr.map((thing) => (
    <div>
      <img src={theimg.url} />
      <p key={thing}>{thing}</p>
    </div>
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
       <div> <img src={theimg.url}/></div>
     </>
  );
}
