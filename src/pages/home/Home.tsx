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
  const bitBucket = 'https://bitbucket.org/mbimpson/';

  function linkToProject(url: string): void {
    window.open(url, '_blank');
  }

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
      <ChipContainer className={classes.root}>
        <Chip label="Angular" onClick={() => linkToProject(`${bitBucket}ngrx-entity/src/master/ngrx-entity/README.md`)} />
        <Chip label="ReactJS" onClick={() => linkToProject(`${bitBucket}forms-validation-in-react/src/master/`)} />
        <Chip label="VueJS" onClick={() => linkToProject(`${bitBucket}todo-vue/src/master/README.md`)} />
        <Chip label="C#" onClick={() => linkToProject(`${bitBucket}asp.net-middleware/src/master/README.md`)} />
        <Chip label="C++" onClick={() => linkToProject(`${bitBucket}connect4/src/master/`)} />
        <Chip label="NestJS" onClick={() => linkToProject(`${bitBucket}nestjs-tutorial/src/master/README.md`)} />
        <Chip label="Python" onClick={() => linkToProject(`${bitBucket}python-api/src/master/README.md`)} />
        <Chip label="Android" onClick={() => linkToProject(`${bitBucket}myweather/src/master/`)} />
        <Chip label="This website!" onClick={() => linkToProject(`${bitBucket}mattbimpson/src/master/README.md`)} />
      </ChipContainer>
    </>
  )
}

export default HomePage;
