import React from 'react';
// hook useState ( build-in )
import { useState, useEffect } from 'react';

function HooksToDoList() {

  const [difficulty,setDifficulty] = useState(0);
  const [items, setItems] = useState([]);
  const [assignedTo, setAssignedTo] = useState('');
  const [itemName,setItemName] = useState('');

  // set status if complete or incomplete 
  // const [status, setStatus] = useState('complete');


  const _changeAssigned = (e) => {
    setAssignedTo(e.target.value);
  }; // end of _changeAssigned

  const _diff = (e) => {
    setDifficulty(e.target.value);
  };
  const _addItem = (e) => {
    e.preventDefault();
    e.target.reset();
    assignedTo && setItems([...items, assignedTo]);
  }; // end of _addItem
    
  /****************************************************** Use Effect ***********************************************/
  // for each render 
  useEffect(() => {
    console.log('Welcome @ To Do List  ');
  });

  // for assignedTo 
  useEffect(() => {
    console.log('Item Name : ', items);
  }, [items]);

  useEffect(() => {
    console.log('Item Name : ', items);
  }, [assignedTo]);

  // for status 
  useEffect(() => {
    if (items.length>=1) { document.title = 'Complete'; }
    else { document.title = 'Incomplete'; }
  }, [items]);


  /****************************************************** Rendering ***********************************************/
  return (
    <section>
      <form onSubmit={_addItem}> Add To Do Item : {items.length}
        <p> Enter Item To Do List : 
          <input placeholder="Item Details" onChange={_changeAssigned}></input> 
        </p>
        <p> Assigned To :
          <input placeholder="Assignee Name"></input>
        </p>
        <p> Set Difficulty ( from 1 to 5 ) :
          <input className="dif" type="range" min="1" max="5" step="0.5"></input>
        </p>
        <button type="submit">Add Item</button>
      </form>
      <p> Items :
        {
          items.map(item => 
            <p key={item}>{item}</p>
          )
        }
      </p>
    </section>
  );

} // end of HooksToDoList function

export default HooksToDoList;