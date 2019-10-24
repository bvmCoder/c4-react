import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import Logo from './Components/Logo';
import Slider from './Components/Slider';
import Features from './Components/Features';
import Footer from './Components/Footer';
import FindSection from './Components/FindSection';
import Panel from './Components/Panel';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-container">
          <div className="app-container">
            <Logo text={'263 X 78'} />
            <Slider />
            <Features className="feature-lists" />
            <FindSection />
            <Panel title="Frequently Asked Questions" collapsible>
              <Fragment>
                <div className="faq-point">
                  <div className="faq-question purple-text">{`Earn 1 point for every eligible net $1 you spend.`}</div>
                  <p className="content">{`Each month you will earn 1 point per net dollar spent on all your purchases. In addition, every month you will automatically receive a bonus equal to 25% of the total points you earned in that month from your net purchases. So, in total, you will earn 1.25 points for your net purchases, and you'll see the bonus portion of your monthly points total displayed separately in the rewards section of your monthly statement.`}</p>
                </div>
                <div className="faq-point">
                  <div className="faq-question purple-text">{`Earn 1 point for every eligible net $1 you spend`}.</div>
                  <p className="content">{`Each month you will earn 1 point per net dollar spent on all your purchases. In addition, every month you will automatically receive a bonus equal to 25% of the total points you earned in that month from your net purchases. So, in total, you will earn 1.25 points for your net purchases, and you'll see the bonus portion of your monthly points total displayed separately in the rewards section of your monthly statement.`}</p>
                </div>
              </Fragment>
            </Panel>
          </div>
        </div>

        <Footer pText={'Copyright 2019. All rights reserved.'}></Footer>
      </Fragment>
    );
  }
}

export default App;
