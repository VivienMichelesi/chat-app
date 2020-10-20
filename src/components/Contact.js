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
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt={this.props.name} />
        <div className='name'>
          {this.props.name}
          <div
            className='status'
            onClick={(event) => {
              const newStatus = !this.state.online;
              this.setState({ online: newStatus });
            }}
          >
            <div
              className={this.state.online ? 'status-online' : 'status-offline'}
            ></div>
            <span className='status-text'>
              {this.state.online ? 'online' : 'offline'}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
