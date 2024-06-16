import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsCloudDownload } from "react-icons/bs";
import myResume from "../lib/assets/Elijah_Matar_Resume.pdf";

import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

function Resume() {
  return (
    <Container lg={12} className="p-2 page-cont">
      <Row className="page-title-style">
        <h1>Resume</h1>
        <a href={myResume} className="download-logo" download>
          <BsCloudDownload />
        </a>
      </Row>
      <Row>
        <Col className="page-section-styles">
          <Row className="resume-cont">
            <Col xs={12} sm={5} md={5} lg={3} className="resume-info">
              <Row className="resume-info-title">
                <h2>Front-End</h2>
                <span className="logo">
                  <MdFoundation />
                </span>
              </Row>
              <Row>
                <ul className="resume-list-cont">
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
            <Col xs={12} sm={5} md={5} lg={3} className="resume-info">
              <Row className="resume-info-title">
                <h2>Back-End</h2>
                <span className="logo">
                  <GrTechnology />
                </span>
              </Row>
              <Row>
                <ul className="resume-list-cont">
                  <li className="resume-list-item">Node.Js</li>
                  <li className="resume-list-item">Jest</li>
                  <li className="resume-list-item">Express.js</li>
                  <li className="resume-list-item">MySQL</li>
                  <li className="resume-list-item">Sequelize</li>
                  <li className="resume-list-item">
                    Object-Relational Mapping(ORM)
                  </li>
                  <li className="resume-list-item">
                    Model-View-Controller(MVC)
                  </li>
                </ul>
              </Row>
            </Col>
            <Col xs={12} sm={11} md={11} lg={3} className="resume-info">
              <Row className="resume-info-title">
                <h2>Performance</h2>
                <span className="logo">
                  <GrDocumentPerformance />
                </span>
              </Row>
              <Row>
                <ul className="resume-list-cont">
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
      </Row>
    </Container>
  );
}

export default Resume;
