import React from "react";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import * as emailjs from "emailjs-com";

function EmailForm() {
  //bringing in all need data from DataContext
  const { ownerInfo, emailSecurity } = useContext(DataContext);

  //extracting all owner info
  let emailOwner = "";
  ownerInfo.forEach((f) => {
    emailOwner = f.email;
  });

  //extrating all validating keys for sending email
  let servicekey = "";
  let publickey = "";
  let templetekey = "";

  //useState for controlled input form rendered
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  //handling the sending of email function after click send email
  const handleSendMessage = (e) => {
    e.preventDefault();

    try {
      servicekey = emailSecurity[0].serviceKey;
      templetekey = emailSecurity[0].templateId;
      publickey = emailSecurity[0].publicKey;

      //making the emial object with key that emailjs can understand
      const templateParams = {
        form_name: email,
        to_name: emailOwner,
        subject: `${subject} from ${name}`,
        message_html: message,
      };

      //checking if all keys have the values not empty
      if (
        templateParams.form_name !== "" &&
        templateParams.message_html !== "" &&
        templateParams.subject !== "" &&
        templateParams.to_name !== "" &&
        templateParams.subject !== "from"
      ) {
        emailjs.send(servicekey, templetekey, templateParams, publickey);

        setTimeout(() => {
          //notify the sender our site if email send successfully
          alerts(
            `Email sent successfully we will contact you as soon as possible`,
            "alert alert-success"
          );
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, 3000);
      } else {
        //notify the sender our site if fields are empty
        alerts(
          "Field are empty please fill in all fileds!",
          "alert alert-danger"
        );
      }
    } catch (error) {
      //handling any error of exception which can be generated
      alerts(
        "Sorry we are Experiencing technical errors..",
        "alert alert-dnager"
      );
    }
  };

  const alerts = (message, classes) => {
    const con = document.getElementById("con");
    const form = document.getElementById("form");

    let div = document.createElement("div");
    div.className = classes;
    div.appendChild(document.createTextNode(message));

    con.insertBefore(div, form);
    setTimeout(() => {
      div.remove();
    }, 3000);
  };

  const stylesInline = { backgroundColor: "ghostwhite", paddingTop: "2rem" };
  return (
    <section className="container w-50 mt-5 mb-5" id="con" style={stylesInline}>
      <form className="forms" id="form">
        <h2 className="text-center mt-5">Send me Email</h2>

        <div className="form-groups mt-5">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-groups mt-2">
          <label htmlFor="subject">Your Subject:</label>
          <input
            type="text"
            className="form-control"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-groups mt-2">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-groups mt-2">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="form-control"
            placeholder="Your message.."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          className="btn btn-secondary mt-4 w-100"
          onClick={(e) => handleSendMessage(e)}
        >
          Send Email..
        </button>
      </form>
    </section>
  );
}

export default EmailForm;
