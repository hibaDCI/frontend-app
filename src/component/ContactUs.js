import {Row, Col, Form, Button, Alert} from "react-bootstrap";
// import axios from "axios";
import axios from "../utils/axiosConfig";
import {useState} from "react";

function ContactUs() {
  const [emailData, setEmailData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setEmailData({...emailData, [e.target.name]: e.target.value});
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    axios.post("/api/auth/contactus", emailData).then((res) => {
      setMsg(res.data.msg);
      setEmailData({username: "", email: "", message: ""});
    });
  };

  return (
    <Row>
      <Col>
        <Form onSubmit={handleSumbit}>
          {msg && (
            <div className="alert alert-success">
              <h1>{msg}</h1>
            </div>
          )}
          <Form.Group controlId="username">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={handleChange}
              value={emailData.username}
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label> Your Message:</Form.Label>
            <Form.Control
              type="text"
              name="message"
              onChange={handleChange}
              value={emailData.message}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={handleChange}
              value={emailData.email}
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Contact Us
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactUs;
