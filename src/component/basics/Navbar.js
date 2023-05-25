import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav>
                <div className="btn-group">

                    {
                        menuList.map((curElem) => {
                            return (<button className='btn' onClick={() => filterItem(curElem)}>{curElem}</button>)
                            
                        })
                    }

                    
                </div>

            </nav>


        </>
    )
}

export default Navbar
