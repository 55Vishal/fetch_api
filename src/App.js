import React, { useState }  from 'react'

function App() {
  const[data, setData]=useState('')

  function GetAPI(){

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((resp)=> resp.json())
    .then((apiData)=>{
      setData(apiData.message);
    });
  }
  
  return (
  <div>
  <img src={data} width={600} ></img>
  <button onClick={GetAPI}>Click here</button>
  </div>
  )
}

export default App

