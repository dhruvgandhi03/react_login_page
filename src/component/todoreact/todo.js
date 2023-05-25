import React, { useState, useEffect } from 'react'
import "./style2.css";


const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);

  } else {
    return [];
  }
}


const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  const addItem = () => {
    if (!inputdata) {
      alert("Please insert the Data");
    }
    else if(inputdata && toggleButton)
    {
      setItems(
        items.map((curElem) => {
          if(curElem.id === isEditItem){
            return {...curElem, name: inputdata }
          }
          return curElem;
        })
      )
      setInputdata("");

      setIsEditItem(null);
  
      setToggleButton(false);
    }
    else {
      const myNewInputdata = {
        id: new Date().getTime().toString(),
        name: inputdata,
      }
      setItems([...items, myNewInputdata]);
      setInputdata("");
    }

  };

  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;

    });
    setInputdata(item_todo_edited.name);

    setIsEditItem(index);

    setToggleButton(true);
  }



  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;

    });

    setItems(updatedItems);

  };

  const removeAll = () => {
    setItems([]);

  };

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));

  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.png" alt="LOADING..." height={120} />
            <figcaption>ADD YOUR LIST HERE</figcaption>
          </figure>
          <div className="additems">
            <input type="text" placeholder='      Add Item'
              className='form-control'
              value={inputdata}
              onChange={(event) => setInputdata(event.target.value)}

            />
            {toggleButton ? 
            (
              <i id='icon' className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i id='icon' className="fa-solid fa-plus" onClick={addItem}></i>
            )}



          </div>
          <div className="showItem">

            {items.map((curElem, index) => {

              return (
                <div className="eachItem" key={curElem.id}>
                  <div className="item"> <h3>{curElem.name}</h3></div>
                  <div className="todobtn">
                    <i id='icon2' className="far fa-edit add-btn" onClick={() => editItem(curElem.id)}></i>
                    <i id='icon2' className="far fa-trash add-btn" onClick={() => deleteItem(curElem.id)} ></i>
                  </div>
                </div>
              )
            })}

          </div>
          <div className="showbtn">
            <button className="btn1" onClick={removeAll}>REMOVE ALL</button>
          </div>

        </div>

      </div>

    </>
  )
}

export default Todo
