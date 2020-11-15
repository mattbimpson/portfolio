import React from 'react';
import Slider from 'react-slick';
import { CarouselContainer, ItemContainer, ImageContainer, Image, TextContainer } from './Styles';
import { Container, HeaderText } from '../../shared/styles/Styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import angular from '../../assets/images/angular.webp';

export interface CarouselItem {
  title: string;
  description: string;
  image?: string;
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
                <ItemContainer key={i}>
                  <ImageContainer>
                    <Image src={angular} />
                  </ImageContainer>
                  <TextContainer>
                    {x.title}: {x.description}
                  </TextContainer>
                </ItemContainer>
              )
            }
          </Slider>
        </CarouselContainer>
      </Container>
    </>
  );
}

export default Carousel;
