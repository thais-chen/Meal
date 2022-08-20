import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  //...
};

 
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
