//https://www.w3schools.com/REACT/react_events.asp
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
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