import Link from "next/link";

import CurrentUser from "../auth/CurrentUser";
import styles from "../styles/Navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <a> Meal-Ease </a>

      <Link href={`${props.favoritesPg}`}>
        <a>Favorites</a>
      </Link>
      <Link href={`${props.ingredients}`}>
        <a>Ingredients</a>
      </Link>

      <div className={styles.user}>
        <CurrentUser />
      </div>
    </div>
  );
};
export default Navbar;
