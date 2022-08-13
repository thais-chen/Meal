import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Head from "next/head";
import Navbar from "../comps/Navbar";
import { useState } from "react";
import Grid from "../comps/Grid";
import styles from "../styles/Ingredients.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
export default function Ingredients() {
  const [form, setForm] = useState("");
  const [theimg, setTheImg] = useState({
    name: "",
    url: "",
    id: "",
  });
  const [imgArr, setImgArr] = useState([]);
  const [test,settest] = useState("")

  function handleChange(e) {
    setForm(e.target.value);
  }
  async function getResponse() {
     const params = new URLSearchParams({ q: form });
    const response = await fetch(
      `https://yummly2.p.rapidapi.com/feeds/auto-complete?${params}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "29a63a7413msh8378b61a2e11cf3p192e62jsn53d83f1651fe",
          "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data.searches[0];
  }



  const clickHandler = async () => {
    try {
      const newImg = await getResponse(); // wait for getImg() to resolve
      setTheImg(newImg);
      setImgArr((prev) => [...prev, newImg]); // add it to the array
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
        onChange={handleChange}
        value={form}
        imgsrc={theimg}
        placeholder="Search Ingredients..."
        clicked={clickHandler}
        icon={faCamera}
      />
      {thingsElements}
    </div>
  );
}
