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


    function toggleColor() {
      if(currentNum % 2 == 0) {
        document.getElementsByClassName('boxcolor')[0].style.backgroundColor = "green";
      }else{
        document.getElementsByClassName('boxcolor')[0].style.backgroundColor = "blue";
      }
    }
    toggleColor();


  }
  render() {
    return(
      <div className="App">
        <h1>Number of Times You Clicked: {this.state.numberOfTimesClicked }</h1>
        <div className="boxcolor" onClick={ this.incrementClicks}></div>

      </div>
    )
  }
}

export default App;