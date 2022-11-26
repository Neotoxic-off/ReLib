import React from 'react';

import "../styles/Input.css";

class Input extends React.Component {
  render() {
    return (
      <>
        <div className="line">
          <input
            type={this.props.text}
            className={this.props.type}
            placeholder={this.props.placeholder}
          />
        </div>
      </>
    );
  }
}

export default Input;