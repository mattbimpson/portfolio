import React from 'react';
import Slider from 'react-slick';
import { CarouselContainer, ItemContainer, ImageContainer, Image, TextContainer } from './Styles';
import { Container, HeaderText } from '../../shared/styles/Styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Todo: figure out how to use require() in the carousel directly so don't need to import here
import angular from '../../assets/images/angular.webp';
import android from '../../assets/images/android.webp';
import cpp from '../../assets/images/cpp.png';
import csharp from '../../assets/images/csharp.png';
import nest from '../../assets/images/nest.png';
import python from '../../assets/images/python.png';
import react from '../../assets/images/react.png';
import vue from '../../assets/images/vue.webp';

export interface CarouselItem {
  title: string;
  description: string;
  image: string;
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

  function getImageSrc(key: string) {
    switch (key) {
      case 'angular':
        return angular;
      case 'android':
        return android;
      case 'cpp':
        return cpp;
      case 'csharp':
        return csharp;
      case 'nest':
        return nest;
      case 'python':
        return python;
      case 'react':
        return react;
      case 'vue':
        return vue;
    }
  }

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
                    <Image src={getImageSrc(x.image)} />
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
