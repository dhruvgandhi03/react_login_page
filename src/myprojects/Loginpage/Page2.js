import React from 'react'
import "./mainstyle.css"

const Page2 = () => {
  

  
  const handleonmove = e => {
    const p = e.clientX / window.innerWidth * 100;

    document.querySelector("#red").style.width = `${p}%`;
  }

  document.onmousemove = e => handleonmove(e);



  return (
    <>
    
    {/* <i class="fa-solid fa-eye"></i> */}
    
      <div id='red' className="side">
        <h1>WELCOME TO WEBSITE</h1>
    </div>
    
    
    <div id="black" className='side'>
        <h1>WELCOME TO WEBSITE</h1>
    </div>
    


    </>
  )
}

export default Page2
