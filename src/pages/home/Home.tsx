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

  function linkToProject(url: string): void {
    window.open(url, '_blank');
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
        <Chip label="Angular" onClick={() => linkToProject('https://bitbucket.org/mbimpson/ngrx-entity/src/master/ngrx-entity/README.md')} />
        <Chip label="ReactJS" onClick={() => linkToProject('https://bitbucket.org/mbimpson/forms-validation-in-react/src/master/')} />
        <Chip label="VueJS" onClick={() => linkToProject('https://bitbucket.org/mbimpson/todo-vue/src/master/README.md')} />
        <Chip label="C#" onClick={() => linkToProject('https://bitbucket.org/mbimpson/asp.net-middleware/src/master/README.md')} />
        <Chip label="Typescript" onClick={() => linkToProjectType('typescript')} />
        <Chip label="NestJS" onClick={() => linkToProject('https://bitbucket.org/mbimpson/nestjs-tutorial/src/master/README.md')} />
        <Chip label="Javascript" onClick={() => linkToProjectType('javascript')} />
        <Chip label="Python" onClick={() => linkToProject('https://bitbucket.org/mbimpson/python-api/src/master/README.md')} />
        <Chip label="Android" onClick={() => linkToProject('https://bitbucket.org/mbimpson/myweather/src/master/')} />
        <Chip label="This website!" onClick={() => linkToProject('https://bitbucket.org/mbimpson/mattbimpson/src/master/README.md')} />
      </ChipContainer>
    </>
  )
}

export default HomePage;
