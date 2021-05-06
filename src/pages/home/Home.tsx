import React from 'react';
import { Container } from '../../shared/styles/Styles';
import { Text, HeaderText } from '../../shared/styles/Styles';
import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer';
import { Footer } from './Styles';

const HomePage: React.FC<any> = () => {

  return (
    <>
      <Container>
        <HeaderText>matt bimpson</HeaderText>
        <Text>
          Hello, my name is Matt and I'm a Colombia based software developer from the UK. 
          I have worked in development for around 10 years now, staying 'full stack' where I can. 
          My core skills lie in Javascript frameworks such as Angular and React, and with C#.
        </Text>
      </Container>
      <ProjectsContainer />
      <br/>
      <Footer>2021 matt bimpson</Footer>
      <br/>
    </>
  )
}

export default HomePage;
