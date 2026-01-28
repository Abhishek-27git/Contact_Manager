import React from "react";
import { useParams, useHistory } from "react-router-dom";
import userImage from "../images/user.jpg";

const ContactDetail = (props) => {
  const { id } = useParams();
  const history = useHistory();
  // Find the contact from the list passed as prop
  const contact = props.contacts.find((c) => c.id === id);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="main" style={{ marginTop: '50px' }}>
      <div className="ui card centered">
        <div className="image">
          <img src={userImage} alt="user" />
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="ui button blue" onClick={() => history.push("/")}>Back to Contact List</button>
      </div>
    </div>
  );
};

export default ContactDetail;
