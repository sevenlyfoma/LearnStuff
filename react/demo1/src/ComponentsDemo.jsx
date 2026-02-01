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

  changeColor = () => {
    this.setState({color: "blue"});
  }

  render() {
    return <h2>I am a {this.state.color} Car! in a class with a property {this.props.make}</h2>;
  }
}


function ComponentsDemo() {
    return (
            <div>
                <Car brand="Ford" />
                <Car brand="BMW" />
                <CarCla make="audi"/>
            </div>
        )
}



export default ComponentsDemo