import React, { Component } from 'react';
import './App.css';
import SimpleTabs from './components/tabs_menu';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="Wrapper01">
        
        <SimpleMenu />
        
        <div className="Premium">
            <div className="search_size">
            <IntegrationReactSelect />
            </div>
        </div>
        
        <div className="menu">
            <SimpleTabs />
        </div>
        
        <div className="right-box">
            <VerticalLinearStepper />
        </div>
      </div>
    );
  }
}

export default App;
