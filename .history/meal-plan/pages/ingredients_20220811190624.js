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

  const thingsElements = imgArr.map((thing) => (
    <div key={thing.id}>
      <img src={thing.url} />
      <p>{thing.name}</p>
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
          getImg();
          setImgArr((oldArray) => {
            return [...oldArray, theimg];
          });
        }}
      >
        Search
      </button>
      {thingsElements}
    </>
  );
}
