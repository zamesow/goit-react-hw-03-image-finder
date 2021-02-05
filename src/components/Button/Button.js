import React, { Component } from 'react';

export default class Button extends Component {
  scroll = e => {
    this.props.onClick();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    console.log(e.target);
  };

  render() {
    return (
      <div>
        <button onClick={this.scroll} className="Button" type="button">
          Load more
        </button>
      </div>
    );
  }
}
