import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleProject from "../components/Single-Project/SingleProject";

function Projects() {
  return (
    <Container lg={12} className="p-2 page-cont">
      <Row className="page-title-style">
        <h1>Projects</h1>
      </Row>
      <Col className="page-section-styles">
          <SingleProject/>
      </Col>
    </Container>
  );
}

export default Projects;
