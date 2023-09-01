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
          I am a software engineer with over 10 years experience working in various industries.
          In recent years I have been mainly focused on developing applications within the Javascript ecosystem for the AWS cloud. <br/>
          My core skills lie in system design, hands-on coding and deployment of software solutions.
        </Text>
      </Container>
      <HeaderTextContainer>
        <HeaderText>some projects</HeaderText>
      </HeaderTextContainer>
      <ProjectsContainer />
      <br/>
      <Footer>2023 matt bimpson</Footer>
      <br/>
    </>
  )
}

export default HomePage;
