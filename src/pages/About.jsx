import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profilePic from "../lib/images/profile-pic.jpg";

function About() {
  return (
    <Container lg={12} className="p-0 page-cont">
      <Row className="page-title-style">
        <h1>Welcome to My Page!</h1>
      </Row>
      <Col className="page-section-styles">
        <Row className="mx-0  about-section">
          <Row className="about-header">
            <Col className="about-title">
              <h1>About</h1>
              <div className="about-divider"></div>
            </Col>
            <Col className="profile-pic-cont">
              <img
                src={profilePic}
                alt="profile-image"
                className="profile-pic"
              />
            </Col>
          </Row>
          <Row className="about-description">
            <p>
              Hi! <br />I am a Full Stack Software Developer with a diverse
              background and a passion for technology. Certified in MERN stack
              development with hands-on experience, and known for strong
              analytical skills, attention to detail, and a proactive approach
              to learning new technologies. After successfully transitioning
              from CDL-A Professional Truck Driving and sales management, I went
              on to cultivate a unique blend of problem-solving skills,
              technical acumen, and a strong work ethic. I love to contribute
              fresh perspectives and a dedicated work ethic through all work.
              <br/>Lets work together!
            </p>
          </Row>
        </Row>
      </Col>
    </Container>
  );
}

export default About;
