import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setCssModule } from './../ClassNames';
import styles from './style.css';

const cx = setCssModule.bind(styles);
const { string } = PropTypes;

class Feature extends Component {
    static propTypes = {
        className: string,
        details: string,
        headerText: string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const elemProps = {};
        if (this.props.disabled) {
            elemProps.disabled = true;
        }
        const classes = cx(this.props.className, {});

        return (
            <section className={classes}>
                <h1>{this.props.headerText}</h1>
                <p>{this.props.details}</p>
            </section>
        );
    }
}

export default Feature;