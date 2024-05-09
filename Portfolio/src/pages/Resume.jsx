import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/*
import { BsCloudDownload } from "react-icons/bs";
<a href={myResume} className="download-logo" download>
  <BsCloudDownload />
</a> 
*/
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

function Resume() {
  return (
    <Container lg={12} className="p-2">
      <h1 className="page-title-style">Resume</h1>
      <Col className="page-section-styles">
        <Row className="resume-cont">
          <Col className="resume-info">
            <Row className="resume-info-title">
              <h2>Front-End</h2>
            </Row>
            <Row>
              <ul className="resume-list-cont">
                <li className="logo">
                  <MdFoundation />
                </li>
                <li className="resume-list-item">HTML 5</li>
                <li className="resume-list-item">CSS</li>
                <li className="resume-list-item">JavaScript</li>
                <li className="resume-list-item">JQuery</li>
                <li className="resume-list-item">Responsive Design</li>
                <li className="resume-list-item">React</li>
                <li className="resume-list-item">Bootstrap</li>
              </ul>
            </Row>
          </Col>
          <Col className="resume-info">
            <Row className="resume-info-title">
              <h2>Back-End</h2>
            </Row>
            <Row>
              <ul className="resume-list-cont">
                <li className="logo">
                  <GrTechnology />
                </li>
                <li className="resume-list-item">Node.Js</li>
                <li className="resume-list-item">Jest</li>
                <li className="resume-list-item">Express.js</li>
                <li className="resume-list-item">MySQL</li>
                <li className="resume-list-item">Sequelize</li>
                <li className="resume-list-item">
                  Object-Relational Mapping(ORM)
                </li>
                <li className="resume-list-item">Model-View-Controller(MVC)</li>
              </ul>
            </Row>
          </Col>
          <Col className="resume-info">
            <Row className="resume-info-title">
              <h2>Performance</h2>
            </Row>
            <Row>
              <ul className="resume-list-cont">
                <li className="logo">
                  <GrDocumentPerformance />
                </li>
                <li className="resume-list-item">NoSQL</li>
                <li className="resume-list-item">
                  Progressive Web Applications (PWA)
                </li>
                <li className="resume-list-item">MongoDB</li>
                <li className="resume-list-item">Mongoose</li>
                <li className="resume-list-item">GraphQL</li>
                <li className="resume-list-item">MERN</li>
                <li className="resume-list-item">State</li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Resume;
