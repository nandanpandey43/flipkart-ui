import React from 'react'

function Topbar() {

    const submitHandler = (e)=>{
        e.preventDefault();
    }


    return (
        <div className="topbar">
            <h1>Flipkart</h1>
            <form onSubmit={submitHandler}>
                <input type="text" 
                    placeholder="Search here..."
                />
            </form>
            <button className="login">Login</button>
            <h2 className="more">More</h2>
            <h2 className="cart">Cart</h2>

        </div>
    )
}

export default Topbar
