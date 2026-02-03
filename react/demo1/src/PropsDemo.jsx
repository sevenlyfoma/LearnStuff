//https://www.w3schools.com/REACT/react_props_destructuring.asp

function Car(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}, with {props.carinfo.fueltype} fuel and {props.carinfo.painttype} paint in year {props.year} </h2>
  );
}

function CarLimited({color = "blue", ...rest}) {
  return (
    <h2>My car is {color}, property limited! and from rest i have {rest.year}</h2>
  );
}

function CarLimited2(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}

function Son(props) {
  return (
    <div style={{background: 'lightgreen'}}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  return (
    <div style={{background: 'lightblue'}}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h2>My two Children</h2>
      <Son>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>
      <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
}



function PropsDemo() {
    let x = "Ford";
    let y = {fueltype: "leaded", painttype:"also leaded"}

    return (
            <div>
                <Car brand={x} model="Mustang" color="red" year={1969} carinfo={y}/>
                <CarLimited brand={x} model="Mustang" color="red" year={1969} carinfo={y}/>
                <CarLimited brand={x} model="Mustang" year={1969} carinfo={y}/>
                <CarLimited2 brand={x} model="Mustang" color="red" year={1969} carinfo={y}/>
                <Parent/>
            </div>
        )
}



export default PropsDemo