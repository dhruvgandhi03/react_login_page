import React from 'react'
import "./style.css"

const Menucard = ({ menuData }) => {
    // console.log(menuData)
    return (
        <>
            <section className='main-card'>
                {menuData.map((curElem) => {

                    const{ id,image , name, category , description } = curElem;
                    return (
                        <>

                            <div className="card-body" key={id}>
                                <span className='card-number'>{id}</span>
                                <div className="card-title">{name}</div>
                                <img src={image} alt=""  />
                                <div className="card-category">{category}</div>
                                <div className="card-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae possimus, provident repellat sapiente nesciunt libero.
                                </div>
                            </div>

                        </>

                    )
                })}

            </section>
        </>
    )
}

export default Menucard
