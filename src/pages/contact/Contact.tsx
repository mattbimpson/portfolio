import React from 'react';
import { Container, HeaderText, List } from './Styles';

const ContactPage: React.FC<any> = () => {

  const linkedIn = 'https://www.linkedin.com/in/matt-b-24312775/';
  const bitBucket = 'https://bitbucket.org/mbimpson';

  return (
    <>
      <Container>
      <HeaderText>Contact Me</HeaderText>
        <List>
          <li onClick={() => window.open(linkedIn, '_blank')}>
          {linkedIn}
          </li>
          <br/>
          <li onClick={() => window.open(bitBucket, '_blank')}>
            {bitBucket}
          </li>
        </List>
      </Container>
    </>
  )
}

export default ContactPage;
