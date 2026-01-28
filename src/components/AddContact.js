import React, { useState, useEffect } from "react";

const AddContact = (props) => {
  const contactToEdit = props.location && props.location.state && props.location.state.contact;
  const [name, setName] = useState(contactToEdit ? contactToEdit.name : "");
  const [email, setEmail] = useState(contactToEdit ? contactToEdit.email : "");

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setEmail(contactToEdit.email);
    }
  }, [contactToEdit]);

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    if (contactToEdit) {
      // Update existing contact
      props.updateContactHandler({ ...contactToEdit, name, email });
    } else {
      // Add new contact
      props.addContactHandler({ name, email });
    }
    setName("");
    setEmail("");
    // Navigate back to main page after adding/updating contact
    if (props.history && props.history.push) {
      props.history.push('/');
    }
  };

  return (
    <div className="ui main">
      <h2 style={{ color: 'black' }}>{contactToEdit ? "Edit Contact" : "Add Contact"}</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue" type="submit">
          {contactToEdit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddContact;
