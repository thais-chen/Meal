import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSliders, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Form.module.scss";

const Form = (props) => {
  return (
    <div
      className="mt-10 lg:w-9/12 lg:pt-24 pt-12 flex justify-between"
      style={{ margin: "auto" }}
    >
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        style={{ textTransform: "capitalize" }}
        className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-gray-500"
      />

      <button onClick={props.clicked} className="ml-5">
        {" "}
        <FontAwesomeIcon icon={faSquarePlus} className={styles.icon} />{" "}
      </button>
      <button onClick={props.editBtn} className="ml-5">
        <FontAwesomeIcon icon={faSliders} className={styles.edit} style={{color: props.isShown ? "red" : "#360259" }} />
      </button>

    </div>
  );
};
export default Form;
