import React from "react";
import "./Styles.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }
render() {
  return (
    <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt="user_picture" />
      <div>
        <article className="name">{this.props.name}</article>
        <div className="status">
          <div
            className={this.state.online ? "status-online" : "status-offline"}
            onClick={event => {
              const newStatus = !this.state.online;
              this.setState({ online: newStatus})
            }}
          ></div>
          <div className="status-text">
            {this.state.online ? "Online" : "Offline"}
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Contact;
