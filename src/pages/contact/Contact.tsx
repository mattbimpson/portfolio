import React from 'react';
import { Container, HeaderText, Text, List } from './Styles';

const ContactPage: React.FC<any> = () => {
  return (
    <>
      <Container>
      <HeaderText>Contact Me</HeaderText>
        <Text>
          <List>
            <li>
              https://www.linkedin.com/in/matt-b-24312775/
            </li>
            <li>
              https://bitbucket.org/mbimpson
            </li>
          </List>
        </Text>
      </Container>
    </>
  )
}

export default ContactPage;
