import { useState, useEffect, useContext, createContext,  useRef, useReducer, useCallback, memo, useMemo  } from 'react';
import { createRoot } from 'react-dom/client';


function ListDemo() {
  const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
  ];
  return (
    <>
      <h2>My Cars:</h2>
      <ul>
        {cars.map((car) => <li key={car.id}>I am a { car.brand }</li>)}
      </ul>
    </>
  );
}


function ListsFormsDemo() {
     return (
            <div>
                 <ListDemo/>
            </div>
        )
}



export default  ListsFormsDemo