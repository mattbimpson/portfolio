import React, {useState} from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { CarouselContainer, ItemContainer } from './Styles';
import { Container, HeaderText } from '../../shared/styles/Styles';

const Carousel: React.FC<any> = (props) => {

  const [selectedItem, setSelectedItem] = useState(0);
  const {title} = props;

  const arrowStyle = {
    fill: 'white',
    cursor: 'pointer'
  };

  const items = [
    { title: 'title', description: 'test thing' },
    { title: 'title 2', description: 'test thing 2' },
    { title: 'title 3', description: 'test thing 3' },
    { title: 'title 4', description: 'test thing 4' }
  ];

  function selectNext() {
    setSelectedItem(selectedItem + 1);
  }

  function selectPrev() {
    setSelectedItem(selectedItem - 1);
  }

  return (
    <>
      <Container>
        <HeaderText>{title}</HeaderText>
        <CarouselContainer>
          <ArrowBackIos style={arrowStyle} onClick={selectPrev} />
            {
              items.map((x, i) =>
                <ItemContainer key={i} selected={i === selectedItem}>{x.title} {x.description}</ItemContainer>
              )
            }
          <ArrowForwardIos style={arrowStyle} onClick={selectNext} />
        </CarouselContainer>
      </Container>
    </>
  );
}

export default Carousel;
