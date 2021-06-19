import React from 'react'

function SidebarMenu() {
    return (
        <div className="sidebar-menu">
        <h3>Products</h3>
        <strong></strong>
            <select name="cars" id="cars">
            <option value="volvo">Select...</option>
                <option value="volvo">Jeans</option>
                <option value="saab">T-shirt</option>
                <option value="opel">Topwear</option>
                <option value="audi">Winter Wear</option>
            </select>

        </div>
    )
}

export default SidebarMenu
