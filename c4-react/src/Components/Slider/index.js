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
            <div className="hero-main">
                <div className="HeroGrayBack smallScreen">
                    <p className="HeroGrayP smallScreen">{'260 x 164'}</p>
                </div>
                <div className="row">
                    <div className="col-md-5">&nbsp;</div>
                    <div className="col-md-7">
                        <p className="noMargin big bold marginTop content">{'More Rewards. Not More Rules.'}</p>
                        <p className="noMargin big bold marginBtm content">{'Bonus Rewards Card.'}</p>
                        <div className="noMargin big bold content">
                            <div className="row">
                                <div className="col-md-6 HeroGrayBack largeScreen">
                                    <p className="HeroGrayP largeScreen">{'260 x 164'}</p>
                                </div>
                                <div className="col-md-6">
                                    <h2 className="noMargin bold big-text purple">{'2,500 bonus'}</h2>
                                    <h3 className="noMargin bold big-text purple">{'rewards points'}</h3>
                                    <p className="noMargin middle bold purple">{'after your first purchase'}</p>
                                    <p className="noMargin small ">{"There's nothing to sign up for, nothing to choose, and no caps or limits on points you can earn."}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row marginBtm">
                            <div className="col-md-8">&nbsp;</div>
                            <Button className="col-md-3 CTA bold">Apply Now</Button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Slider;


// slider -> the main Image on the page