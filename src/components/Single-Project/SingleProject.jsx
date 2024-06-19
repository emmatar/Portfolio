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
      <Container className="projects">
        <Row className="single-proj-cont">
          <Col className="proj-content">
            <Row className="proj-header">
              <Col className="col-8 proj-title">
                <h1>Sweater Weather&nbsp;⛈️</h1>
              </Col>
              <Col className="proj-github">
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
              </Col>
            </Row>
            <Row className="proj-description">
              <p>
                An application that displays the weather forecast for cities
                around the world! Also, based on the given temperature for your
                search, Sweater Weather indicates <i>"Weather</i> or not, to
                wear a <i>Sweater</i> or not" by showing a mini sweater logo on
                todays forecast section. *Btw, pls forgive me
              </p>
            </Row>
            <Row className="proj-application">
              <a
                className="proj-anchor"
                href="https://emmatar.github.io/Sweater-Weather/"
                target="blank"
              >
                <img
                  className="proj-image"
                  src={sweaterWeather}
                  alt="Kansas_City_Weather"
                />
              </a>
            </Row>
          </Col>
        </Row>
        <div className="style-line"></div>
        <Row className="single-proj-cont">
          <Col className="proj-content">
            <Row className="proj-header">
              <Col className="col-8 proj-title">
                <h1>Drum Key&nbsp;🥁</h1>
              </Col>
              <Col className="proj-github">
                <a href="https://github.com/emmatar/DrumKey.git" target="blank">
                  <img
                    className="github-icon"
                    src={gitHubIcon}
                    alt="github-icon"
                  />
                </a>
              </Col>
            </Row>
            <Row className="proj-description">
              <p>
                A keyboard driven application, that utilizes instrument sounds
                to help understand how addEventListeners function.
              </p>
            </Row>
            <Row className="proj-application">
              <a
                className="proj-anchor"
                href="https://emmatar.github.io/DrumKey/"
                target="blank"
              >
                <img
                  className="proj-image"
                  src={drumKey}
                  alt="drum_keyboard_application"
                />
              </a>
            </Row>
          </Col>
        </Row>
        <div className="style-line"></div>
        <Row className="single-proj-cont">
          <Col className="proj-content">
            <Row className="proj-header">
              <Col className="proj-title">
                <h1>Code Quiz&nbsp;💯</h1>
              </Col>
              <Col className="proj-github">
                <a
                  href="https://github.com/emmatar/Code-Quiz.git"
                  target="blank"
                >
                  <img
                    className="github-icon"
                    src={gitHubIcon}
                    alt="github-icon"
                  />
                </a>
              </Col>
            </Row>
            <Row className="proj-description">
              <p>
                Welcome to the Code Quiz! Would you like to test your knowledge
                on some Javascript Basics? Well, if you are, you&apos;re exactly
                where you need to be. The Code quiz is a timed quiz that will
                dock the time to complete the quiz, if you answer incorrectly!
                slow but intense music plays
              </p>
            </Row>
            <Row className="proj-application">
              <a
                className="proj-anchor"
                href="https://emmatar.github.io/Code-Quiz/"
                target="blank"
              >
                <img
                  className="proj-image"
                  src={codeQuiz}
                  alt="javascript_quiz_application"
                />
              </a>
            </Row>
          </Col>
        </Row>
        <div className="style-line"></div>
        <Row className="single-proj-cont">
          <Col className="proj-content">
            <Row className="proj-header">
              <Col className="proj-title">
                <h1>Daily-Scheduler&nbsp;⏰</h1>
              </Col>
              <Col className="proj-github">
                {" "}
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
              </Col>
            </Row>
            <Row className="proj-description">
              <p>
                Welcome to the Daily Scheduler! An application set to help users
                keep track of their daily events with ....wait for
                it.....Colors!! The Daily Scheduler affords users to save daily
                events in specific time blocks, and depending on the user&apos;s
                current time-of-day, the time blocks will change colors to
                notify the user if the event has passed, is within the current
                hour, or is still lingering in the near future!
              </p>
            </Row>
            <Row className="proj-application">
              <a
                className="proj-anchor"
                href="https://emmatar.github.io/Daily-Scheduler/"
                target="blank"
              >
                <img
                  className="proj-image"
                  src={dailyScheduler}
                  alt="daily_scheduling_application"
                />
              </a>
            </Row>
          </Col>
        </Row>
        <div className="style-line"></div>
        <Row className="single-proj-cont">
          <Col className="proj-content">
            <Row className="proj-header">
              <Col className="proj-title">
                <h1>Note Taker&nbsp;✏️</h1>
              </Col>
              <Col className="proj-github">
                {" "}
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
              </Col>
            </Row>
            <Row className="proj-description">
              <p>
                A fun place where you can keep track of your LIFE for
                tree-fiddy, jk its free! Note Taker&apos;s mission is to create
                a place where users can write down their thoughts so that they
                can keep track of the important events and tasks throughout this
                worlds&apos; busy schedule.
                <br />
                <br />
                **Fully deploying by end of June!**
              </p>
            </Row>
            <Row className="proj-application">
              <a
                className="proj-anchor"
                href="https://ku-note-taker-f8beb8780f80.herokuapp.com/"
                target="blank"
              >
                <img
                  className="proj-image"
                  src={noteTaker}
                  alt="note_application"
                />
              </a>
            </Row>
          </Col>
        </Row>
        <div className="style-line"></div>

        <Row className="single-proj-cont">
          <Col className="proj-content">
            <Row className="proj-header">
              <Col className="proj-title">
                <h1>Patient Portal&nbsp;🩺</h1>
              </Col>
              <Col className="proj-github">
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
              </Col>
            </Row>
            <Row className="proj-description">
              <p>
                An online patient portal application that allows medical care
                professionals to manage patient health by tracking and viewing
                their patients logs. As well as, the ability to schedule and
                create appointments via npm calendar package. Last, but not
                least, the user can also add new patients and add personalized
                notes.
                <br />
                <br />
                **Fully deploying by end of June!**
              </p>
            </Row>
            <Row className="proj-application">
              {" "}
              <a
                className="proj-anchor"
                href="https://tracknheal-be5b35216eb1.herokuapp.com/"
                target="blank"
              >
                <img
                  className="proj-image"
                  src={patientPortal}
                  alt="doctor_portal_application"
                />
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleProject;
