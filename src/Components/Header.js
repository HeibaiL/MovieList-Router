import React from "react";
import {Link} from "react-router-dom"

export default function Header() {
    return <div className="header">
        <Link to="/">
            <h1>Logo</h1>
        </Link>
        <ul className="menu">
            <Link to="/about">
                <li>About Us</li>
            </Link>
            <Link to="/shop">
                <li>Shop</li>
            </Link>
        </ul>
    </div>
}