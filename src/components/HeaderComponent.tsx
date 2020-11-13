import React, { useState } from 'react';
import { Container, Link, Nav } from './Styles';

const Header: React.FC<any> = () => {
  return (
    <>
      <Container>
        <Nav>
          <Link href="/home">
            Home
          </Link>
          <Link href="/work">
            Work
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </Nav>
      </Container>
    </>
  )
}

export default Header;
