import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if (name === "fullName") {
      return setFullName(value);
    } else if (name === "email") {
      return setEmail(value);
    } else {
      return setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container lg={12} className="p-2">
      <h1 className="page-title-style">Contact</h1>
      <Col className="page-section-styles">
        <Row className="mx-4">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label style={{fontSize: "20pt"}}>Name</Form.Label>
              <Form.Control
                value={fullName}
                name="fullName"
                type="text"
                placeholder="Enter name"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{fontSize: "20pt"}}>Email address</Form.Label>
              <Form.Control
                value={email}
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label style={{fontSize: "20pt"}}>Message</Form.Label>
              <Form.Control
                value={message}
                name="message"
                type="text"
                placeholder="Enter message"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Col>
    </Container>
  );
}

export default Contact;
