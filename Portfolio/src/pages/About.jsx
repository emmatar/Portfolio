import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container lg={12} className="p-2">
      <h1 className="page-title-style">About Me</h1>
      <Col className="page-section-styles">
        <Row className="mb-4 ">
          <h3 className="mb-2">Hi, and welcome to my page!</h3>
        </Row>
        <Row className="mx-2">
          <p>
            As an always learning full-stack web developer, this website will
            change with me as I progress into this exciting development journey.
            I hope that this little piece of the internet will help explain who
            I am as a developer, and to showcase my interests through my work.
          </p>
          <p className="pt-5">*Due to short timing: Updates coming soon!*</p>
        </Row>
      </Col>
    </Container>
  );
}

export default About;
