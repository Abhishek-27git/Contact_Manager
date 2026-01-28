import React from "react";
import { useHistory } from "react-router-dom";
import './App.css';

const EditContact = () => {
  const history = useHistory();

  const handleEditClick = () => {
    history.push("/add");
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <span
        style={{ cursor: 'pointer', color: '#0052cc', display: 'flex', alignItems: 'center' }}
        onClick={handleEditClick}
        title="Edit Contact"
      >
        {/* Pencil Icon SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" />
          <path d="M16 8l-8 8" />
          <path d="M8 16l8-8" />
          <path d="M12 12l0 0" />
        </svg>
      </span>
      <span
        style={{ cursor: 'pointer', color: '#e74c3c', display: 'flex', alignItems: 'center' }}
        title="Delete Contact"
      >
        {/* Trash Icon SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="6" width="18" height="15" rx="2" ry="2" fill="none" />
          <path d="M9 10v6" />
          <path d="M15 10v6" />
          <path d="M4 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        </svg>
      </span>
    </div>
  );
};

export default EditContact;
