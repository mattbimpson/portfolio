import React from 'react';
import { Container, HeaderText, List } from '../../shared/styles/Styles';

const ContactPage: React.FC<any> = () => {

  const linkedIn = 'https://www.linkedin.com/in/matt-b-24312775/';
  const github = 'https://github.com/mattbimpson';

  return (
    <>
      <Container>
      <HeaderText>contact me</HeaderText>
        <List>
          <li onClick={() => window.open(linkedIn, '_blank')}>
          {linkedIn}
          </li>
          <br/>
          <li onClick={() => window.open(github, '_blank')}>
            {github}
          </li>
        </List>
      </Container>
    </>
  )
}

export default ContactPage;
