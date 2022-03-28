import React from 'react';
import { Container } from '../../shared/styles/Styles';
import { Text, HeaderText } from '../../shared/styles/Styles';
import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer';
import { Footer, HeaderTextContainer } from './Styles';

const HomePage: React.FC<any> = () => {

  return (
    <>
      <Container>
        <HeaderText>matt bimpson</HeaderText>
        <Text>
        Hello, my name is Matt and I'm a software developer from the UK. 
          I have worked in development for around 10 years now, staying full stack where I can. 
          My core skills lie in Javascript frameworks such as VueJS and API development with NodeJS or C#.
          I have experience in cloud computing solutions with AWS and Azure, and like to stay upto date by working on personal projects hosted in bitbucket.
        </Text>
      </Container>
      <HeaderTextContainer>
        <HeaderText>some projects</HeaderText>
      </HeaderTextContainer>
      <ProjectsContainer />
      <br/>
      <Footer>2021 matt bimpson</Footer>
      <br/>
    </>
  )
}

export default HomePage;
