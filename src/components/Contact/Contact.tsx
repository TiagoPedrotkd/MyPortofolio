import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // Para exibir mensagens de erro

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validação simples
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    // Enviar e-mail com EmailJS
    emailjs
      .send(
        "service_doqfb1u",
        "template_6pi9xhf",
        templateParams,
        "ZvMKAgLz63XRvcJ0h"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Limpar os campos e mensagens de erro após o envio
        setName("");
        setEmail("");
        setMessage("");
        setError("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError("Failed to send the email. Please try again.");
      });
  };

  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find Me <i className="uil uil-corner-right-down"></i>
            </h2>
            <p>
              <i className="uil uil-envelope"></i> Email:
              tiagopedrotkdfreelancer@gmail.com
            </p>
            <p>
              <i className="uil uil-phone"></i> +351 965619393
            </p>
          </div>
        </div>
        <div className="col">
          <div className="form-control">
            <div className="form-inputs">
              <input
                type="text"
                className="input-field"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <input
                type="email" // Alterado para 'email' para validação automática
                className="input-field"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="text-area">
              <textarea
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              ></textarea>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="form-button">
              <button className="btn" onClick={handleSubmit}>
                Send <i className="uil uil-message"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
