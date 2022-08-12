import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Navbar from "../comps/Navbar";
import { useState } from "react";
import axios from "axios";

export default function Ingredients() {
  const [form, setForm] = useState("");
  const [theimg, setheimg] = useState({
    name: '',
    url: "",
    id: ''
  });

  const [imgArr, setImgArr] = useState([]);

  function handleChange(e) {
    setForm(e.target.value);
  }
  const addObj = (obj) => {
    setImgArr((current) => [...current, obj]);
  };
  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search",
    params: {
      query: "snickers",
      maxCalories: "5000",
      minProtein: "0",
      maxProtein: "100",
      minFat: "0",
      maxFat: "100",
      minCarbs: "0",
      maxCarbs: "100",
      minCalories: "0",
      offset: "0",
      number: "10",
    },
    headers: {
      "X-RapidAPI-Key": "29a63a7413msh8378b61a2e11cf3p192e62jsn53d83f1651fe",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    
  function getImgs() {
    fetch(`https://www.themealdb.com/images/ingredients/${form}.png`)
      .then((resp) => resp)
      .then((data) =>
        setheimg((prevImg) => ({
          ...prevImg,
          name: form,
          url: data,
          id:Math.random()
        }))
      );
       setImgArr((oldArray) => [...oldArray, theimg]);
        console.log(imgArr);
  }

  const thingsElements = imgArr.map((thing) =>

      <div key={thing.id}>
        <img src={thing.url.url}/>
        <p>{thing.name}</p>
      </div>

  );

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
        }}
      >
        Search
      </button>
      {/* create img div */}
      <div>{thingsElements}</div>
    </>
  );
}
