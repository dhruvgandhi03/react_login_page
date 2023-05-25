import React, { useState } from 'react'
import "./style1.css"

const UseState = () => {
    const initialData = 10

    const [myNum ,setmyNum]= React.useState(initialData);
    return (
        <>
            <div className="container">
                <div className="display">
                  {myNum}
                </div>

                <div className="btns">
                    <div className="btn" id='btn1'onClick={()=>setmyNum(myNum + 1)}>INCR</div>
                    <div className="btn" id='btn2'onClick={()=>setmyNum(myNum - 1)}>DECR</div>
                </div>
                


            </div>






        </>
    )
}

export default UseState
