//https://www.w3schools.com/REACT/react_events.asp


function MissedGoal() {
  return <h2>MISSED!</h2>;
}

function MadeGoal() {
  return <h2>Goal!</h2>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  // if (isGoal) { This is the same as the below ternary operator
  //   return <MadeGoal/>;
  // }
  // return <MissedGoal/>;

  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

function ConditionalCar(props) {
  return (
    <>
      {props.brand && <h2>My car is a {props.brand}!</h2>}
    </>
  );
}

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }
  const shoot2 = (a) => {
    alert(a);
  }
  const shoot3 = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }

  return (
    <div>
      <button onClick={shoot}>Take the shot!</button>
      <button onClick={() => shoot2("Goal!")}>Take the shot!</button>
      <button onClick={(event) => shoot3("Goal!", event)}>Take the shot!</button>

      <Goal isGoal={false} />
      <Goal isGoal={true} />

      <ConditionalCar brand="Ford" />
      <ConditionalCar/>

    </div>
    
  );
}

function EventsConditionalsDemo() {
     return (
            <div>
                <Football />
            </div>
        )
}



export default EventsConditionalsDemo