import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Navbar from "../comps/Navbar";
import { useState } from "react";

export default function Ingredients() {
  const [form, setForm] = useState("");
  const [theimg, setheimg] = useState({
    name: '',
    url: '',
    id: ''
  });

  const [imgArr, setImgArr] = useState([]);

  function handleChange(e) {
    setForm(e.target.value);
  }
  const addObj = (obj) => {
    setImgArr((current) => [...current, obj]);
  };

  function getImg(){
    const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "29a63a7413msh8378b61a2e11cf3p192e62jsn53d83f1651fe",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

fetch(
  `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/search?query=${form}&addChildren=true&minProteinPercent=5&maxProteinPercent=50&minFatPercent=1&maxFatPercent=10&minCarbsPercent=5&maxCarbsPercent=30&metaInformation=false&intolerances=egg&sort=calories&sortDirection=asc&offset=0&number=10`,
  options
)
  .then((response) => response.json())
  .then((response) =>
    setheimg((prevImg) => ({
      ...prevImg,
      name: form,

      url: `https://spoonacular.com/cdn/ingredients_100x100/${response.results[0].image}`,
      id: Math.random(),
    }))
  )


 setImgArr((oldArray) => [...oldArray, theimg]);
 console.log(imgArr);
    console.log(theimg);
  }

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
        <img src={thing.url}/>
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
          getImg();
        }}
      >
        Search
      </button>
      {thingsElements}
    </>
  );
}
