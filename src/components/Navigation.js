import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div style={{ margin:10 }}>
            <Link to="/" style={{ margin:10, padding:10}}>Home</Link>
            <Link to="/about" >About</Link>
        </div>
    )
}

export default Navigation;