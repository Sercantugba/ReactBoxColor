import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfTimesClicked: 0
    }
    this.incrementClicks = this.incrementClicks.bind(this);
  }
  incrementClicks(e) {
    e.preventDefault();
    let currentNum = this.state.numberOfTimesClicked;
    this.setState({ numberOfTimesClicked: this.state.numberOfTimesClicked + 1 });

    
  }
}

export default App;