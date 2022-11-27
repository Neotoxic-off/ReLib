import React from 'react';

import "../styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div>
          <p className={this.props.type}>
            {this.props.text}
          </p>
        </div>
      </>
    );
  }
}

export default Footer;