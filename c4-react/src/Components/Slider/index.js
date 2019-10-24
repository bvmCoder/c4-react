import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';
import './style.css';

const { string } = PropTypes;

class Slider extends Component {
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
            <div className="flex-row hero-main">
                <div className="flex-column item-1">

                </div>
                <div className="flex-column item-2">
                    <div className="top-row">
                        <h1 className="rewards">{'More Rewards. Not More Rules.'}</h1>
                        <h1 className="rewards">{'Bonus Rewards Card.'}</h1>
                    </div>
                    <div className="middle-row">
                        <div className="slider-image left">
                            {'260 X 164'}
                        </div>
                        <div className="right">
                            <h1 className="text-purple">{'2,500 bonus'}</h1>
                            <h2 className="text-purple">{'rewards points'}</h2>
                            <h3 className="text-purple">{'after your first purchase'}</h3>
                            <p className="p-margin">{"There's nothing to sign up for, nothing to choose,"}</p>
                            <p className="p-margin">{"and no caps or limits on points you can earn."}</p>
                        </div>
                    </div>
                    <div className="bottom-row">
                        <Button className="apply-now">Apply Now</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;


// slider -> the main Image on the page