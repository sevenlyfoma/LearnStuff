//https://www.w3schools.com/REACT/react_props_destructuring.asp

function Car(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}, with {props.carinfo.fueltype} fuel and {props.carinfo.painttype} paint in year {props.year} </h2>
  );
}


function PropsDemo() {
    let x = "Ford";
    let y = {fueltype: "leaded", painttype:"also leaded"}

    return (
            <div>
                <Car brand={x} model="Mustang" color="red" year={1969} carinfo={y}/>
            </div>
        )
}



export default PropsDemo