import React from 'react';
import Chip from '@material-ui/core/Chip';
import { Container, Text, HeaderText, ChipContainer } from './Styles';

const HomePage: React.FC<any> = () => {

  function linkToProject(language: string): void {
    window.open(`https://bitbucket.org/mbimpson/?language=${language}&sort=-updated_on`, '_blank');
  }

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
      <ChipContainer>
        <Chip label="Angular" onClick={() => linkToProject('typescript')} />
        <Chip label="ReactJS" onClick={() => linkToProject('typescript')} />
        <Chip label="VueJS" onClick={() => linkToProject('typescript')} />
        <Chip label="C#" onClick={() => linkToProject('c%23')} />
        <Chip label="Typescript" onClick={() => linkToProject('typescript')} />
        <Chip label="NestJS" onClick={() => linkToProject('typescript')} />
      </ChipContainer>
    </>
  )
}

export default HomePage;
