function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}


function PropsDemo() {
    return (
            <div>
                <Car brand="Ford" />
            </div>
        )
}



export default PropsDemo