import React from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { CarouselContainer } from './Styles';
import { Container, HeaderText } from '../../shared/styles/Styles';

const Carousel: React.FC<any> = (props) => {

  const {title} = props;

  const arrowStyle = {
    fill: 'white',
    cursor: 'pointer'
  };

  return (
    <>
      <Container>
        <HeaderText>{title}</HeaderText>
        <CarouselContainer>
          <ArrowBackIos style={arrowStyle} />

          <ArrowForwardIos style={arrowStyle} />
        </CarouselContainer>
      </Container>
    </>
  );
}

export default Carousel;
