
const Heading = (props) => {
    return (
      <div className="mt-6">
        <h1 className="text-4xl"> {props.heading}</h1>
        <p className="text-base my-1 	">{props.info}</p>
      </div>
    );
}
export default Heading;