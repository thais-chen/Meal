import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Grid from "../comps/Grid";
import Navbar from "../comps/Navbar";
export default function Ingredients(){

    return (
      <>
        <Navbar
            page="/"/>
        <Heading
            heading = "Ingredients"
            info = "Search by etc"/>

        <Form
            label = "Search Ingredients...">
        
        </Form>
        <Grid />
      </>
    );
}