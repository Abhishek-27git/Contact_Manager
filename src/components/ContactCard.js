
import React from "react";
import userImage from "../images/user.jpg";
import { Link, useHistory } from "react-router-dom";


const ContactCard = (props) => {
  const { contact } = props;
  const { id, name, email } = contact;
  const history = useHistory();
  return (
    <div className="item" style={{ display: 'flex', alignItems: 'center' }}>
      <Link to={`/contact/${id}`} style={{ display: 'flex', flex: 1, alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
        <img className="ui avatar image" src={userImage} alt="User" />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </Link>
      {/* Edit icon */}
      <span
        style={{ cursor: 'pointer', color: '#0052cc', marginLeft: '16px', display: 'flex', alignItems: 'center' }}
        title="Edit Contact"
        onClick={() => history.push({ pathname: '/add', state: { contact } })}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" />
          <path d="M16 8l-8 8" />
          <path d="M8 16l8-8" />
          <path d="M12 12l0 0" />
        </svg>
      </span>
      {/* Trash icon */}
      <i className="trash alternate outline icon trash" style={{ color: "red", marginLeft: '16px', cursor: 'pointer' }} onClick={props.clickHandler}></i>
    </div>
  );
}

export default ContactCard;
