import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Grid from "../comps/Grid";
d
export default function Ingredients(){

    return (
      <>
        <Heading
            heading = "Ingredients"
            info = "Search by etc"/>

        <Form
            label = "Search Ingredients..." />
        <Grid />
      </>
    );
}