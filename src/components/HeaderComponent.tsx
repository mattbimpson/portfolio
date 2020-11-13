import React, { useState } from 'react';

import './Styles.scss';

const Header: React.FC<any> = () => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <a href="/home">
            Home
          </a>
          <a href="/work">
            Work
          </a>
          <a href="/contact">
            Contact
          </a>
        </div>
      </div>
    </>
  )
}

export default Header;
