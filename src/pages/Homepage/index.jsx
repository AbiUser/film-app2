import React from 'react'
import {Link} from "react-router-dom";

export default function Homepage() {
    const linkStyle = {
        color: "#FF731D"
    }
  return (
    <>
        <h1>Top TV</h1>
        <span>All about the small silver screen</span>
        <ul>
            <li>
                <Link to="/shows" style={linkStyle}>Explore Shows</Link>
            </li>
            <li>
                <Link to="/show" style={linkStyle}>Search your favourite show</Link>
            </li>
        </ul>
    </>
  )
}
