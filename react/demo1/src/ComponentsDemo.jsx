//https://www.w3schools.com/REACT/react_class.asp

import { Component } from 'react'

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

//Old style, no longer used much
class CarCla extends Component {
  constructor(props) {
    super(props);
    this.state = {color: "red", year: 1964};
  }

  static getDerivedStateFromProps(props, state) {
    return {color: props.col };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({make: "changed after timeout"})
    }, 5000)
  }

  changeColor = () => {
    this.setState({color: "blue"});
  }

  render() {
    return <h2>I am a {this.state.color} Car! in a class with a property {this.state.make}</h2>;
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h2>My Favorite Color is {this.state.favoritecolor}</h2>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}




function ComponentsDemo() {
    return (
            <div>
                <Header />
                <Car brand="Ford" />
                <Car brand="BMW" />
                <CarCla make="audi"/>
                <CarCla make="audi" col="purple"/>
            </div>
        )
}



export default ComponentsDemo