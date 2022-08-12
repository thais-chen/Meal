import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Navbar from "../comps/Navbar";
import { useState } from "react";

export default function Ingredients() {
  const [form, setForm] = useState("");
  const [theimg, setheimg] = useState({
    name: "",
    url: "",
    id: "",
  });
  const [imgArr, setImgArr] = useState([]);

  function handleChange(e) {
    setForm(e.target.value);
  }

/*   function getImg() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "29a63a7413msh8378b61a2e11cf3p192e62jsn53d83f1651fe",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };
    fetch(
      `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${form}`,
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setheimg((prevImg) => ({
          ...prevImg,
          name: form,
          url: response.parsed[0].food.image,
          id: Math.random(),
        }))
      )
      .catch((err) => console.error(err));

       setImgArr((oldArray) => {
            return [...oldArray, theimg];
          });
  } */
const getImg = async () => {
  const params = new URLSearchParams({ ingr: form });
  const res = await fetch(`https://example.com/parser?${params}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "<api-key>",
      "X-RapidAPI-Host": "<host>",
    },
  });

  if (!res.ok) {
    throw res;
  }

  const data = await response.json();
  return {
    name: form,
    url: data.parsed[0].food.image,
    id: Math.random(), // recommend Date.now() instead
  };
};
  const clickHandler = async () => {
    try {
      const newImg = await getImg(); // wait for getImg() to resolve
      settheimg(newImg); // set img state
      setImgArr((prev) => [...prev, newImg]); // add it to the array
    } catch (err) {
      console.error(err);
    }
  };
  const thingsElements = () => {

    imgArr.map((thing) => (
    <div key={thing.id}>
      <img src={thing.url} />
      <p>{thing.name}</p>
    </div>
  ))};

  return (
    <>
      <Navbar page="/" />
      <Heading heading="Ingredients" info="Search by etc" />
      <Form
        label="Search Ingredients..."
        onChange={handleChange}
        value={form}
      />
      <button onClick={clickHandler}>Search</button>
      {thingsElements}
    </>
  );
}
