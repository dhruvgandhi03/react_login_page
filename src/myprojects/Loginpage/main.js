import React, { useState } from 'react'
import "./mainstyle.css"
import Page2 from './Page2';

const Main = () => {

  const [inputdata1, setInputdata1] = useState("");
  const [inputdata2, setInputdata2] = useState("");
  const [inputdata3, setInputdata3] = useState("");
  const [inputdata4, setInputdata4] = useState("");
  const [items1, setItems1] = useState([]);
  const [toggleButton, setToggleButton] = useState(false);


  const submitData = () => {

    if (!inputdata1 || !inputdata2) {
      alert("Please Enter Username and password");
    }
    else {
      const myNewInputdata = {
        id: new Date().getTime().toString(),
        name: inputdata1,
        pass: inputdata2,

      }
      setItems1([...items1, myNewInputdata])

      alert("YOUR ACCOUNT HAS BEEN CREATED");


    }


  }

  const logInData = () => {
    items1.map((curElem) => {
      // console.log(curElem.name);
      if (curElem.name === inputdata3 && curElem.pass === inputdata4) {
        console.log('WELCOME TO WEBSITE');
        setToggleButton(true);

        document.querySelector(".box").style.animation = " fadeout  2s ease-in-out";


      }
      else if(!inputdata3 || !inputdata4){
        alert('PLEASE FILL THE INFORMATION');



      }
      else{
        alert('PLEASE CHECK YOUR EMAIL & PASSWORD');
      }
    })


  }


  let flag = 0;

  const signIn = () => {
    if (flag == 0) {

    }
    else {
      document.querySelector(".signin").style.zIndex = '2';
      document.querySelector(".login").style.zIndex = '1';
      document.querySelector("#btn1").style.color = "red";
      document.querySelector("#btn2").style.color = "white";
      flag = 0;

    }
  }
  const logIn = () => {
    if (flag == 1) {

    }
    else {
      document.querySelector(".signin").style.zIndex = '1';
      document.querySelector(".login").style.zIndex = '2';
      document.querySelector("#btn2").style.color = "red";
      document.querySelector("#btn1").style.color = "white";

      flag = 1;

    }

  }



  return (
    <>


      {toggleButton ?
        (
          <Page2 />
        ) : (<div className="box">
          <div className="container">

            <div className="btns">
              <button id='btn1' className="btn" onClick={() => signIn()}>SIGN UP</button>
              <button id='btn2' className="btn" onClick={() => logIn()}>LOG IN</button>
            </div>
            <div className="innerbox">



              <div className="signin">
                <div className="title">
                  ENTER YOUR <span>INFORMATION</span>   TO SIGN UP
                </div>
                <div className="info">

                  <input type="text" id='inputs' placeholder='Email Adress'
                    value={inputdata1}
                    onChange={(event) => setInputdata1(event.target.value)} />

                  <input type="text" id='inputs' placeholder='Password'
                    value={inputdata2}
                    onChange={(event) => setInputdata2(event.target.value)} />

                  <div className="submit" onClick={() => submitData()}>SUBMIT </div>

                </div>

              </div>
              <div className="login">
                <div className="title">
                  ENTER YOUR <span>INFORMATION</span> TO LOG IN
                </div>
                <div className="info">
                  <input type="text" id='inputs' placeholder='Email Adress'
                    value={inputdata3}
                    onChange={(event) => setInputdata3(event.target.value)} />
                  <input type="text" id='inputs' placeholder='Password'
                    value={inputdata4}
                    onChange={(event) => setInputdata4(event.target.value)} />
                  <div className="submit" onClick={() => logInData()}>SUBMIT</div>


                </div>
              </div>
            </div>

          </div>
        </div>
        )}

    </>
  )
}

export default Main
