import React from 'react';
import './Styles.css';

const presence = true;
function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src="https://randomuser.me/api/portraits/women/95.jpg" alt="user_picture" />
        <div>
          <article className="name">Louise Genet</article>
          <div className="status">
            <div className={presence ? "status-online" : "status-offline"}></div>
            <div className="status-text">{presence ? "Online" : "Offline"}</div>
          </div>
        </div>
    </div>
  );
}

export default Contact;