import { Card, Button } from "react-bootstrap";

export const BlogItem = () => {
  // const handleOnClick = {} => alert("you have clicked, my darling");

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>BlogNoBlog</Card.Title>
        <Card.Text>Ain't happpening my boy</Card.Text>
        <Button
          onClick={() => alert("You clicked this button, yes yes, very good")}
          variant="primary"
          //setError-galima Inline
          //jeigu norim daugiau nei vienos eilutes - iskeliam y atskira funkcija
        >
          What it yz?
        </Button>
      </Card.Body>
    </Card>
  );
};
