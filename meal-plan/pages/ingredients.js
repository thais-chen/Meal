import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Navbar from "../comps/Navbar";
import { useState } from "react";
import Grid from "../comps/Grid";

export default function Ingredients() {
  const [form, setForm] = useState("");
  const [theimg, setTheImg] = useState({
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
    const res = await fetch(
      `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${params}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "29a63a7413msh8378b61a2e11cf3p192e62jsn53d83f1651fe",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      }
    );

    if (!res.ok) {
      throw res;
    }
    setForm("");
    const data = await res.json();
    return {
      name: form,
      url: data.parsed[0].food.image,
      id: Math.random(),
    };
  };
  const clickHandler = async () => {
    setForm("");
    try {
      const newImg = await getImg(); // wait for getImg() to resolve
      setTheImg(newImg); // set img state
      setImgArr((prev) => [...prev, newImg]); // add it to the array
    } catch (err) {
      console.error(err);
    }
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
        value={form}
        imgsrc={theimg}
        clicked={clickHandler}
      />
      <div className="grid grid-cols-3 gap-4 my-4 mx-4">{thingsElements}</div>
    </>
  );
}
