import React from 'react';
import { Container, HeaderText, List } from './Styles';

const ContactPage: React.FC<any> = () => {
  return (
    <>
      <Container>
      <HeaderText>Contact Me</HeaderText>
        <List>
          <li>
            https://www.linkedin.com/in/matt-b-24312775/
          </li>
          <li>
            https://bitbucket.org/mbimpson
          </li>
        </List>
      </Container>
    </>
  )
}

export default ContactPage;
