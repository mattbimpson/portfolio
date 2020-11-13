import React, { useState } from 'react';
import { Container, Text, HeaderText } from './Styles';

const HomePage: React.FC<any> = () => {
  return (
    <>
      <Container>
        <HeaderText>mattbimpson.uk</HeaderText>
        <Text>
          Hello, my name is Matt and I'm a Colombia based software developer from the UK. 
          I have worked in development for around 10 years now, staying 'full stack' where I can. 
          My core skills lie in Javascript frameworks such as Angular and React, and with C#.
        </Text>
      </Container>
    </>
  )
}

export default HomePage;
