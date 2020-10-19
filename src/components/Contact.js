import React from "react";
import "./Styles.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="user_picture" />
      <div>
        <article className="name">{props.name}</article>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <div className="status-text">
            {props.online ? "Online" : "Offline"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
