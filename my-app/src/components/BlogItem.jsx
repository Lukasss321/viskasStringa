import { Card, Button } from "react-bootstrap";

export const BlogItem = ({ post }) => {
  // const handleOnClick = {} => alert("you have clicked, my darling");
  const { image, title, text } = post;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          onClick={() => alert("You clicked this button, yes yes, very good")}
          variant="primary"
          //setError-galima Inline
          //jeigu norim daugiau nei vienos eilutes - iskeliam y atskira funkcija
        >
          What is love?
        </Button>
      </Card.Body>
    </Card>
  );
};
