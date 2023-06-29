import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CardComponent } from "../components/card/CardComponent";
import { useNavigate } from "react-router";
const Homepage = () => {
  const username = "Shaarang";
  const [randomHeader, setRandomHeader] = useState();
  const [randomBody, setRandomBody] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setRandomHeader("Lorem Ipsum");
    setRandomBody(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non tincidunt leo, ut fermentum elit. Nam congue nibh ut bibendum congue. Ut tristique odio sollicitudin enim eleifend gravida. In ornare tortor id turpis cursus commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec risus tortor, iaculis at pretium quis, mollis et erat. Quisque sollicitudin nisl eu justo tempor efficitur. In at faucibus neque."
    );
  }, []);
  const navigateTo = (projectId) => {
    navigate(`/profile/${projectId}`);
  };
  return (
    <div>
      <Row style={{ marginTop: "10%" }}>
        <Col md={{ span: 8, offset: 2 }}>
          <CardComponent
            body={
              <h1> Hello, my name is {username}, welcome to my portfolio </h1>
            }
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
        <Col md={{ span: 2, offset: 2 }}>
          <CardComponent
            header={"React App with class component"}
            body={"..."}
            style={{ width: "18rem" }}
            action={"More info"}
            click={() => navigateTo(1)}
          />
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <CardComponent
            header={"Docker App"}
            body={"..."}
            style={{ width: "18rem" }}
            action={"More info"}
            click={() => navigateTo(2)}
          />
        </Col>
        <Col md={3}>
          <CardComponent
            header={"React app with Redux"}
            style={{ width: "18rem" }}
            action={"More info"}
            click={() => navigateTo(3)}
          />
        </Col>
        <Col md={{ span: 3, offset: 2 }}>
          <CardComponent
            header={"My porfolio"}
            style={{ width: "18rem" }}
            action={"More info"}
            click={() => navigateTo(4)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
