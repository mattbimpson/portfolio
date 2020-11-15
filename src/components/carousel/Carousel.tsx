import React from 'react';
import Slider from 'react-slick';
import { CarouselContainer, ItemContainer } from './Styles';
import { Container, HeaderText } from '../../shared/styles/Styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface CarouselItem {
  title: string;
  description: string;
}

export interface CarouselProps {
  title: string;
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = (props) => {

  const {title, items} = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Container>
        <HeaderText>{title}</HeaderText>
        <CarouselContainer>
          <Slider {...settings}>
            {
              items.map((x, i) =>
                <ItemContainer key={i}>{x.title} {x.description}</ItemContainer>
              )
            }
          </Slider>
        </CarouselContainer>
      </Container>
    </>
  );
}

export default Carousel;
