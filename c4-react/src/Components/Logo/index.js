import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const { string } = PropTypes;

class Logo extends Component {
  static propTypes = {
    className: string,
    text: string
  };

  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick = (event) => {
    console.log(`Logo Clicked!: ${event.target.textContent}`);
  }

  render() {
    return (
      <header className="main-logo" onClick={this.onHandleClick}>
        {this.props.text}
      </header>
    );
  }
}

export default Logo;


// header