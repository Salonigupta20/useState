import React, { useState } from 'react';

const App = () => {

  const [name, setName] = useState();
  console.log("component rerender")
  const [Surname, setSurname] = useState();
  // const [fullName, setFullName] = useState();
  // const [fullSurname, setFullSurname] = useState();

  
  const inputEvent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);

  }
  const inEvent = (event) => {
    // console.log(event.target.value);
    setSurname(event.target.value);

  }

// const submitForm = (event) => {
//   event.preventDefault();
//   setFullName(name);
//   setFullSurname(Surname);
//   alert("form submitted");
// }
return (
  <>
    <div>
    {/* <form onSubmit={submitForm}> */}
        <h1>Hello {name} {Surname} </h1>
        <input
          type="text"
          placeholder='Enter Your Name'
          onChange={inputEvent}
          value={name}
        />
        
        <br></br>
        <input
          type="text"
          placeholder="Enter Your Surname"
          onChange={inEvent}
          value={Surname}
        />
        <button>Submit</button>
        {/* </form> */}
    </div>


  </>
);
};

export default App;
