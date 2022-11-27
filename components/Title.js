import React from 'react';

import "../styles/Title.css";

class Title extends React.Component {
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

export default Title;