import React from "react";

import { Card, Button } from "react-bootstrap";

export const CardComponent = (props) => {
  return (
    <Card style={props.style}>
      {props.image && <Card.Img variant="top" src={props.image} />}
      <Card.Body>
        {props.header && <Card.Title>{props.header}</Card.Title>}
        {props.body && <Card.Text>{props.body}</Card.Text>}
        {props.action && (
          <Button variant="primary" onClick={props.click}>
            {props.action}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
