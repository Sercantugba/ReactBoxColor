import React from 'react';
import './App.css';

// Objective

// Create a <div> box with an onClick handle event that changes the background color when clicked.
// When the box is clicked, we want a clickCounter indicating how many times it was clicked. 
// We want the box color to toggle back to it's original color! (Hint: create a toggle function)

class App extends React.Component {
  constructor(props) {
    super(props);
    // Set a state (hint: color & clickCounter)
    this.state = {
      numberOfTimesClicked: 0
    }
    this.incrementClicks = this.incrementClicks.bind(this);
  }
  incrementClicks(e) {
    e.preventDefault();
    let currentNum = this.state.numberOfTimesClicked;
    this.setState({ numberOfTimesClicked: this.state.numberOfTimesClicked + 1 });
    // try to put reset function to reset numberoftimesclicked

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