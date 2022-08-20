import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Head from "next/head";
import Navbar from "../comps/Navbar";
import Dropdown from "../comps/Dropdown";
import { useState } from "react";
 import styles from "../styles/Ingredients.module.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
export default function Ingredients() {
  const [form, setForm] = useState("");
  const [theimg, setTheImg] = useState({
    label: "",
    image: "",
    id: "",
  });
  const [imgArr, setImgArr] = useState([]);
  const [test, settest] = useState("");
  const [dropdown, setDropdown] = useState([]);

  function handleChange(e) {
    setForm(e.target.value);
  }
  async function getResponse() {
    const params = new URLSearchParams({ q: form });
    const response = await fetch(
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
    const data = await response.json();
    s
    return data.parsed;
  }

  const clickHandler = async (e) => {
    try {
      setForm(e.target.value);
      const newImg = await getResponse(); // wait for getImg() to resolve
    

      setDropdown(theimg); // add it to the array
      console.log(dropdown);
    } catch (err) {
      console.error(err);
    }
  };

  const thingsElements = imgArr.map((thing) => (
    <div>
      <p>{imgArr}fs</p>
    </div>
  ));


  return (
    <div className={`${styles.container} px-5`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page="/" />
      <Heading heading="Ingredients" info="Search by etc" />
      <Form
        label="Search Ingredients..."
        onChange={clickHandler}
        value={form}
        imgsrc={theimg}
        placeholder="Search Ingredients..."
        clicked={clickHandler}
        icon={faCamera}
      />
      {/* <Dropdown ingredients={dropdown} /> */}
    </div>
  );
}
