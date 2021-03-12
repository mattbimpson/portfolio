import React from 'react';
import Slider from 'react-slick';
import { CarouselContainer, ItemContainer, ImageContainer, Image, TextContainer, LinkButton } from './Styles';
import { Container, HeaderText } from '../../shared/styles/Styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Todo: figure out how to use require() in the carousel directly so don't need to import here
import angular from '../../assets/images/angular.png';
import android from '../../assets/images/android.png';
import cpp from '../../assets/images/cpp.jpeg';
import csharp from '../../assets/images/csharp.jpeg';
import nest from '../../assets/images/nest.jpeg';
import node from '../../assets/images/node.png';
import python from '../../assets/images/python.jpeg';
import react from '../../assets/images/react.jpg';
import vue from '../../assets/images/vue.png';
import kube from '../../assets/images/kubernetes.png';

export interface CarouselItem {
  title: string;
  description: string;
  image: string;
  url: string;
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
      case 'node':
        return node;
      case 'python':
        return python;
      case 'react':
        return react;
      case 'vue':
        return vue;
      case 'kube':
        return kube;
    }
  }

  function goToProject(url: string): void {
    window.open(url, '_blank');
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
                    <br/>
                    <LinkButton onClick={() => goToProject(x.url)}>
                      View project on BitBucket
                    </LinkButton>
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
