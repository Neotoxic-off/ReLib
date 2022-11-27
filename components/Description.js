import React from 'react';

import "../styles/Description.css";

class Description extends React.Component {
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

export default Description;