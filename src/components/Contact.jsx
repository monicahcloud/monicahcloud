import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import hireme from "./../images/Hire-Me.jpg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, phone, email, date, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <div>
      <section id="contact" className="">
        <img src={hireme} alt="hire" className="img center" />
        <p className="center description2">
          Interested in working together? Complete the form below with some
          information about your project. Please allow 3 days for me to get back
          to you.
        </p>
        <Form
          name="contact"
          onSubmit={handleSubmit}
          className="grid-container "
        >
          <div className="column">
            <img
              className="img center"
              src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/278794218_10159965656871118_5722573989943339512_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=q9saJja9oHsAX8nJK3H&_nc_ht=scontent-ord5-1.xx&oh=00_AT_fzRFlR8oaJ2FpcQd_R0DcKDJiv8aHrDBOFgZUOWWo-A&oe=62DEC835"
              alt="monicah"
            />
            <h4>Monicah Cloud</h4>
            <h4>Phone: (470) 838-6593</h4>
            <h4>Email: monicahcloud@outlook.com</h4>
          </div>
          <div className="column">
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                id="phone"
                name="phone"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                id="email"
                name="email"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Timeline</Form.Label>
              <Form.Control
                type="date"
                id="date"
                name="date"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tell me a little about your project:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="message"
                name="message"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Button 
            variant="success" 
            type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </section>
    </div>
  );
}

export default Contact;
