import React,{useState,useEffect} from 'react';
import "../home/home.css"
function Home({prod}) {

  return (
    <div className='home'>
      {prod.map((e) => (
        <div key={e.id} className="producte">
          <img className="imge" src={e.imageUrl} alt="img" />
          <h2>{e.name}</h2>
        
          <span>${e.price}</span>
        </div>
      ))}
    </div>
  ) }
        
export default Home