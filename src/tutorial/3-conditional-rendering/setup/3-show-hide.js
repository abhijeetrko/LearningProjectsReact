import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [surname,setSurname]=useState('Marathe')
  const [show,setShow]=useState(true);
return <>
<input type="text" value={surname} onChange={(e)=>setSurname(e.target.value)}></input>
  <button className="btn" onClick={() => setShow(!show)}>Click Here to Change the name</button>
 {show && <h1>Abhijeet</h1>}
 {show || <Abhijeet/>}

 <h3>{surname}</h3>
  </>
};

function Abhijeet (){


  return (
    <h1>Abhishek</h1>
  )
}

export default ShowHide;
