import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setCssModule } from './../ClassNames';
import Feature from './../Feature';
import styles from './style.css';

const cx = setCssModule.bind(styles);
const { string } = PropTypes;

const featuresOject = [
    {
        "headerText": "25% bonus",
        "details": "on all points earned every month, automatically." 
    },
    {
        "headerText": "No Caps or Limits",
        "details": "on the points you can earn, plus you have five years to redeem points for rewards2." 
    },
    {
        "headerText": "Chip-Enhanced Security",
        "details": "gives you the protection you need to feel confident wherever you make purchases." 
    }
]

class Features extends Component {
    static propTypes = {
        className: string
    };

    constructor(props) {
        super(props);
        this.state = {
            featuresOject
        }
    }

    render() {
        const classes = cx(this.props.className, {});
        const { featuresOject } = this.state;
        const featureItems = featuresOject.map((feature, index) =>
                <Feature {...feature} key={index} />
            );
        return (
            <div className={classes}>
                {featureItems}
            </div>
        );
    }
}

export default Features;