import React from'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar () {
    return(
        <>
        <nav class="navbar sticky-top navbar-light bg-light">
  <Link to="/venues"className="" class="navbar-brand" href="#">VENUES</Link>
  <Link to="/"className="" class="navbar-brand" href="#">HOME</Link>
  <Link to="/contact"className="" class="navbar-brand" href="#">CONTACT</Link>
</nav>
        </>
    )
}


export default Navbar;
