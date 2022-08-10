import Heading from "../comps/Heading";
import Form from "../comps/Form";

export default function Ingredients(){

    return (
      <>
        <Heading
            heading = "Ingredients"
              info = "Search by etc"/>

        <Form
            labelOne = "Search Ingredients..." />
      </>
    );
}