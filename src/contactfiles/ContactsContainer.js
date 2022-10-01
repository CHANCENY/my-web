import React from "react";
import HeadingContats from "./HeadingContats";
import ContactInfo from "./ContactInfo";
import EmailForm from "./EmailForm";

function ContactsContainer() {
  //container of all companent in contact page
  return (
    <section
      data-bs-version="5.1"
      className="contacts3 map1 cid-tgQF9WdUG2"
      id="contacts3-h"
    >
      <div className="container-fluid">
        <HeadingContats />
        <ContactInfo />
        <EmailForm />
      </div>
    </section>
  );
}

export default ContactsContainer;
