import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ item, handleName }) => {
  return (
    <Card style={{ width: "18rem" }} onClick={() => handleName(item.name)}>
      <Card.Img variant="top" src={item.imgSrc} height="200" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
