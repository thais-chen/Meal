import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft,faCircleUser  } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <div className={`flex justify-between pt-6`}>
      <Link href={`${props.page}`}>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          size="lg"
          style={{ color: "blue" }}
        >
          <a></a>
        </FontAwesomeIcon>
      </Link>

      <Link href={`${props.page}`}>
        <FontAwesomeIcon
          icon={faCircleUser}
          size="lg"
          style={{ color: "blue" }}
        >
          {" "}
          <a></a>
        </FontAwesomeIcon>
      </Link>
    </div>
  );
};
export default Navbar;
