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
        <Row className="mx-2 about-section">
          <h1 className="mb-2 about-header">About Me</h1>
          <p>
            Hi, my name is Elijah, and I am a Full Stack Web Developer
            <br />
            <br />
            
             I
            feel like knowledge with a strong background in data-driven
            decision-making. Proficient in HTML5, CSS3, JavaScript ES6+, React,
            Express.js, and SQL, focusing on optimizing user interaction and
            operational efficiency. Committed to leveraging analytical skills
            and a detail-oriented approach to develop innovative applications
            that enhance user experience.
          </p>
          {/* <p className="pt-5">*Due to short timing: UI updates coming soon!*</p> */}
        </Row>
      </Col>
    </Container>
  );
}

export default About;
