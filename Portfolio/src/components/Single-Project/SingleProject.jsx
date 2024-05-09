import "./StyleProject.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sweaterWeather from "../../lib/images/sweater-weather.png";
import drumKey from "../../lib/images/drum-key.png";
import codeQuiz from "../../lib/images/codeQuiz.png";
import patientPortal from "../../lib/images/patientPortal.png";
import dailyScheduler from "../../lib/images/dailyScheduler.png";
import noteTaker from "../../lib/images/noteTaker.png";
import gitHubIcon from "../../lib/images/github-mark.png";

// eslint-disable-next-line react/prop-types
const SingleProject = () => {
  return (
    <>
      <Container className="single-proj-cont">
        <Row className="single-proj-info">
          <Col className="single-proj-text">
            <h4>
              Sweater Weather
              <a
                href="https://github.com/emmatar/Sweater-Weather.git"
                target="blank"
              >
                <img
                  className="github-icon"
                  src={gitHubIcon}
                  alt="github-icon"
                />
              </a>
            </h4>
            <p>
              A weather application that displays the forecast AND weather or
              not to wear a sweater or not (im so sorry).
            </p>
          </Col>
          <Col className="single-proj-img d-flex align-items-center">
            <a href="https://emmatar.github.io/Sweater-Weather/" target="blank">
              <img
                src={sweaterWeather}
                alt="Kansas_City_Weather"
                style={{ width: "100%" }}
              />
            </a>
          </Col>
        </Row>
      </Container>

      <div className="style-line"></div>
      <Container className="single-proj-cont">
        <Row className="single-proj-info">
          <Col className="single-proj-text">
            <h4>
              Drum Key
              <a href="https://github.com/emmatar/DrumKey.git" target="blank">
                <img
                  className="github-icon"
                  src={gitHubIcon}
                  alt="github-icon"
                />
              </a>
            </h4>
            <p>
              A keyboard driven application, that utilizes instrument sounds to
              help understand how addEventListeners function.
            </p>
          </Col>
          <Col className="single-proj-img d-flex align-items-center">
            <a href="https://emmatar.github.io/DrumKey/" target="blank">
              <img
                src={drumKey}
                alt="Kansas_City_Weather"
                style={{ width: "100%" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
      <div className="style-line"></div>
      <Container className="single-proj-cont">
        <Row className="single-proj-info">
          <Col className="single-proj-text">
            <h4>
              Code Quiz
              <a href="https://github.com/emmatar/Code-Quiz.git" target="blank">
                <img
                  className="github-icon"
                  src={gitHubIcon}
                  alt="github-icon"
                />
              </a>
            </h4>
            <p>
              Welcome to the Code Quiz! Would you like to test your knowledge on
              some Javascript Basics? Well, if you are, you&apos;re exactly
              where you need to be. The Code quiz is a timed quiz that will dock
              the time to complete the quiz, if you answer incorrectly! slow but
              intense music plays
            </p>
          </Col>
          <Col className="single-proj-img d-flex align-items-center">
            <a href="https://emmatar.github.io/Code-Quiz/" target="blank">
              <img
                src={codeQuiz}
                alt="Kansas_City_Weather"
                style={{ width: "100%" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
      <div className="style-line"></div>
      <Container className="single-proj-cont">
        <Row className="single-proj-info">
          <Col className="single-proj-text">
            <h4>
              Patient Portal
              <a
                href="https://github.com/prismhead26/Patient-Portal-App-Team-Colab.git"
                target="blank"
              >
                <img
                  className="github-icon"
                  src={gitHubIcon}
                  alt="github-icon"
                />
              </a>
            </h4>
            <p>
              An online patient portal application that allows medical care
              professionals to manage patient health by tracking and viewing
              their patients logs. As well as, the ability to schedule and
              create appointments via npm calendar package. Last, but not least,
              the user can also add new patients and add personalized notes.
            </p>
          </Col>
          <Col className="single-proj-img d-flex align-items-center">
            <a
              href="https://tracknheal-be5b35216eb1.herokuapp.com/"
              target="blank"
            >
              <img
                src={patientPortal}
                alt="Kansas_City_Weather"
                style={{ width: "100%" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
      <div className="style-line"></div>
      <Container className="single-proj-cont">
        <Row className="single-proj-info">
          <Col className="single-proj-text">
            <h4>
              Daily Scheduler
              <a
                href="https://github.com/emmatar/Daily-Scheduler.git"
                target="blank"
              >
                <img
                  className="github-icon"
                  src={gitHubIcon}
                  alt="github-icon"
                />
              </a>
            </h4>
            <p>
              Welcome to the Daily Scheduler! An application set to help users
              keep track of their daily events with ....wait for it.....Colors!!
              The Daily Scheduler affords users to save daily events in specific
              time blocks, and depending on the user&apos;s current time-of-day,
              the time blocks will change colors to notify the user if the event
              has passed, is within the current hour, or is still lingering in
              the near future!
            </p>
          </Col>
          <Col className="single-proj-img d-flex align-items-center">
            <a href="https://emmatar.github.io/Daily-Scheduler/" target="blank">
              <img
                src={dailyScheduler}
                alt="Kansas_City_Weather"
                style={{ width: "100%" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
      <div className="style-line"></div>
      <Container className="single-proj-cont">
        <Row className="single-proj-info">
          <Col className="single-proj-text">
            <h4>
              Note Taker
              <a
                href="https://github.com/emmatar/Note-Taker.git"
                target="blank"
              >
                <img
                  className="github-icon"
                  src={gitHubIcon}
                  alt="github-icon"
                />
              </a>
            </h4>
            <p>
              A fun place where you can keep track of your LIFE for tree-fiddy,
              jk its free! Note Taker&apos;s mission is to create a place where
              users can write down their thoughts so that they can keep track of
              the important events and tasks throughout this worlds&apos; busy
              schedule.
            </p>
          </Col>
          <Col className="single-proj-img d-flex align-items-center">
            <a
              href="https://ku-note-taker-f8beb8780f80.herokuapp.com/"
              target="blank"
            >
              <img
                src={noteTaker}
                alt="Kansas_City_Weather"
                style={{ width: "100%" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleProject;
