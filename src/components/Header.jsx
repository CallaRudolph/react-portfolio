import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <Link to="/">Portfolio</Link> | <Link to="/images">Images</Link>
    </div>
  );
}

export default Header;
