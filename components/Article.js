import React from 'react';

import "../styles/Article.css";

class Article extends React.Component {
  render() {
    return (
      <>
        <div className={this.props.typetitle}>
          {this.props.title}
        </div>
        <div className={this.props.typedescription}>
          {this.props.description}
        </div>
        <p className={this.props.typebody}>
          {this.props.body}
        </p>
        <div className={this.props.typefooter}>
          {this.props.footer}
        </div>
      </>
    );
  }
}

export default Article;