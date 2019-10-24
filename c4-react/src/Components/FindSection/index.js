import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setCssModule } from './../ClassNames';
import styles from './style.css';

const cx = setCssModule.bind(styles);
const { string } = PropTypes;

class FindSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="find-section">
                <div className="title-section">{'Find out more about the Bonus Rewards Card'}</div>
                <div className="flex-row">
                    <div className="left">
                        <div className="main-point">
                            <div className="purple-title">{'Rewards Program'}</div>
                            <ul className="">
                                <li>{'Earn 1 point for every eligible net $1 you spend.'}</li>
                                <li>{'Get a 25% bonus on all points earned every month, automatically.'}</li>
                                <li>{'No caps or limits on the points you can earn, plus you have five years to redeem points for rewards'}</li>
                                <li>{'2,500 bonus rewards points awarded after first purchase, redeemable for $25 cash back, merchandise, gift cards or travel savings.'}</li>
                                <li>{'Redemption starts at 2,500 points for $25 cash back, or redeem 25,000 points for round-trip airfare up to $325.'}</li>
                            </ul>
                        </div>
                        <div className="main-point">
                            <div className="purple-title">{'Annual Fee'}</div>
                            <div className="">{'No Annual Fee'}</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="main-point">
                            <div className="purple-title">{'Purchase APR'}</div>
                            <div className="">{'After that, a variable APR, currently 13.24% to 24.24%.* See the Terms and Conditions for complete details.'}</div>
                        </div>
                        <div className="main-point">
                            <div className="purple-title">{'Cardmember Benefits'}</div>
                            <div className="">{'Enjoy chip-enhanced acceptance and security plus a variety of important features, including zero fraud liability4 and auto rental collision damage waiver. See Consumer Card Features and Benefits for a complete listing of all card benefits.'}</div>
                        </div>
                        <div className="main-point">
                            <div className="purple-title">{'Minimum Requirements'}</div>
                            <div className="">{'Applicant must be 18 years of age and have a U.S. address and Social Security number.'}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FindSection;
