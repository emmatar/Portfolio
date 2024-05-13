import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container lg={12} className="p-2">
      <Row className="page-title-style">
        <h1>About</h1>
      </Row>
      <Col className="page-section-styles">
        <Row className="mb-4">
          <h3 className="mb-2">Hello, and welcome to my page!</h3>
        </Row>
        <Row className="mx-2">
          <p className="mb-5">
            As an always learning full-stack web developer, this website will
            change with me as I progress into this exciting development journey.
            I hope that this little piece of the internet will help explain who
            I am as a developer, and to showcase my interests through my work.
            <br />
            <br />
            <br />
          </p>
          <p className="pt-5">*Due to short timing: UI updates coming soon!*</p>
        </Row>
      </Col>
    </Container>
  );
}

export default About;
