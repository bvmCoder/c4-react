import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setCssModule } from './../ClassNames';
import styles from './style.css';

const cx = setCssModule.bind(styles);
const { bool, string } = PropTypes;

class Button extends Component {
    static propTypes = {
        className: string,
        disabled: bool
    };

    constructor(props) {
        super(props);
        this.onHandleClick = this.onHandleClick.bind(this);
    }

    onHandleClick = (event) => {
        console.log(`Button Clicked! ${event.target.textContent}`);
    }

    render() {
        const elemProps = {};
        if (this.props.disabled) {
            elemProps.disabled = true;
        }
        const classes = cx(this.props.className, {
            button: true,
            disabled: this.props.disabled
        });

        return (
            <button className={classes} {...elemProps} type='button' onClick={this.onHandleClick}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;