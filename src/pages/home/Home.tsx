import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Text, HeaderText, ChipContainer } from './Styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const HomePage: React.FC<any> = () => {

  const classes = useStyles();

  function linkToProjectType(language: string): void {
    window.open(`https://bitbucket.org/mbimpson/?language=${language}&sort=-updated_on`, '_blank');
  }

  function linkToProject(): void {
    window.open('https://bitbucket.org/mbimpson/mattbimpson/src/master/', '_blank');
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
      <ChipContainer className={classes.root}>
        <Chip label="Angular" onClick={() => linkToProjectType('typescript')} />
        <Chip label="ReactJS" onClick={() => linkToProjectType('typescript')} />
        <Chip label="VueJS" onClick={() => linkToProjectType('typescript')} />
        <Chip label="C#" onClick={() => linkToProjectType('c%23')} />
        <Chip label="Typescript" onClick={() => linkToProjectType('typescript')} />
        <Chip label="NestJS" onClick={() => linkToProjectType('typescript')} />
        <Chip label="Javascript" onClick={() => linkToProjectType('javascript')} />
        <Chip label="This website!" onClick={linkToProject} />
      </ChipContainer>
    </>
  )
}

export default HomePage;
