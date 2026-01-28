import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import api from "../api/contacts";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import { v4 as uuid } from 'uuid';




function App() {
  const [contacts, setContacts] = useState([]);

  // Retrieve contacts from server
  const retrieveContacts = async () => {
    try {
      const response = await api.get("/contacts");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      return [];
    }
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      setContacts(allContacts);
    };
    getAllContacts();
  }, []);


  // Add contact using POST
  const addContactHandler = async (contact) => {
    try {
      const request = { ...contact, id: uuid() };
      const response = await api.post("/contacts", request);
      setContacts((prevContacts) => [...prevContacts, response.data]);
    } catch (error) {
      console.error("Failed to add contact:", error);
    }
  };

  // Update contact using PUT
  const updateContactHandler = async (contact) => {
    try {
      const response = await api.put(`/contacts/${contact.id}`, contact);
      setContacts((prevContacts) => prevContacts.map((c) => c.id === contact.id ? response.data : c));
    } catch (error) {
      console.error("Failed to update contact:", error);
    }
  };

  // Remove contact (optional: implement DELETE on server)
  const removeContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/add" render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler} updateContactHandler={updateContactHandler} />
          )} />
          <Route exact path="/" render={(props) => (
            <ContactList {...props} contacts={contacts} removeContactHandler={removeContactHandler} />
          )} />
          <Route path="/contact/:id" render={(props) => (
            <ContactDetail {...props} contacts={contacts} />
          )} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
 