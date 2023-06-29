import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { CardComponent } from "../components/card/CardComponent";

const projectList = [
  {
    id: 1,
    name: "React app with class components",
    completed: "week 4",
    description: "A react app that showcases Pokemon list and Football players",
  },
  {
    id: 2,
    name: "Docker app",
    completed: "week 3",
    description: "A implementation of docker containers and docker-compose",
  },
  {
    id: 3,
    name: "React app with Redux",
    completed: "week 5",
    description:
      "A react app that showcases usage of Redux and passing information about pokemons between components",
  },
  {
    id: 4,
    name: "My portfolio",
    completed: "week 7",
    description:
      "A react app that showcases info about myself and some of my projects",
  },
];

const ProjectDescription = (props) => {
  return (
    <div>
      <Row>
        <Col>Completed in : {props.completed}</Col>
      </Row>
      <Row>
        <Col>Details : {props.description}</Col>
      </Row>
    </div>
  );
};

const Projects = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [projectDetails, setProjectDetails] = useState({});
  useEffect(() => {
    const project = projectList.filter(
      (project) => project.id === parseInt(id)
    );
    console.log(project);
    setProjectDetails(project[0]);
  }, [id, projectDetails]);

  return (
    <Container>
      <Row style={{ marginTop: "10%" }}>
        <Col md={{ span: 8, offset: 2 }}>
          <CardComponent
            header={projectDetails.name}
            body={
              <ProjectDescription
                completed={projectDetails.completed}
                description={projectDetails.description}
              />
            }
            action={"<- Go back"}
            click={goBack}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
