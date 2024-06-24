import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container lg={12} className="p-2 page-cont">
      <Row className="page-title-style">
        <h1>Welcome to My Page!</h1>
      </Row>
      <Col className="page-section-styles">
        <Row className="mx-0  about-section">
          <Row className="about-header">
            <h1>About</h1>
          </Row>
          <Row className="about-description">
            <p>
              Hi! <br />
              I'm Elijah, a certified Full Stack Software Developer with a
              diverse background and a passion for technology. Over the last
              four years, I've been navigating the roads as a CDL A professional
              truck driver. Yup, those massive absurdities that are always slow,
              in the left lane for absolutely no reason?! This experience has
              taught me the value of precision, reliability, and problem-solving
              under pressure. Before hitting the highways, I spent four years in
              sales management, where I led teams to success, honed my
              communication skills, and learned the art of customer
              satisfaction.
            </p>
          </Row>
        </Row>
      </Col>
    </Container>
  );
}

export default About;
