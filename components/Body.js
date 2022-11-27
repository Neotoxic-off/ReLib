import React from 'react';

import "../styles/Body.css";

class Body extends React.Component {
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

export default Body;