
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
  const history = useHistory();
  const searchInputRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter contacts by name or email
  const filteredContacts = props.contacts.filter((contact) => {
    const term = searchTerm.toLowerCase();
    return (
      contact.name.toLowerCase().includes(term) ||
      contact.email.toLowerCase().includes(term)
    );
  });

  const renderContactList = filteredContacts.map((contact) => {
    return (
      <ContactCard key={contact.id} contact={contact} clickHandler={() => props.removeContactHandler(contact.id)} />
    );
  });

  const handleSearch = (e) => {
    setSearchTerm(searchInputRef.current.value);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h2 style={{ margin: 0 }}>Contact List</h2>
        <button className="ui button blue" onClick={() => history.push('/add')}>Add Contact</button>
      </div>
      {/* Search Bar - full width to Add Contact button */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '3px', padding: '4px 8px', background: '#fff', width: '100%' }}>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search Contacts"
          style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1.1em', background: 'transparent' }}
          onChange={handleSearch}
        />
        <span style={{ color: '#888', marginLeft: 8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0 ? (
          renderContactList
        ) : (
          <div style={{ textAlign: 'center', color: '#888', padding: '16px 0' }}>No contact available</div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
   