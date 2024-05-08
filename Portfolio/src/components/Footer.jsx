import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="fixed-bottom">
      <Container fluid>
        <Row className="d-flex justify-content-center flex-wrap">
          <Col md={2} className="d-flex justify-content-center align-items-center p-0">
            <a className="contact-info mail" href="mailto:m.matar515@gmail.com">
            </a>
          </Col>
          <Col md={2} className="d-flex justify-content-center align-items-center p-0">
            <a
              className="contact-info github"
              href="https://github.com/emmatar"
            >
            </a>
          </Col>
          <Col md={2} className="d-flex justify-content-center align-items-center p-0">
            <a
              className="contact-info linkedin"
              href="https://www.linkedin.com/in/elijah-m-818597b1/"
            >
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
