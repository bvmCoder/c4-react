import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const { string } = PropTypes;

class Footer extends Component {
  static propTypes = {
    className: string,
    pText: string
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
      <footer className="main-footer" onClick={this.onHandleClick}>
        <p>{this.props.pText}</p>
      </footer>
    );
  }
}

export default Footer;


// footer for the landing page