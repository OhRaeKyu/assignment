import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { PALLETS } from '../../utils/constants';
import { CarouselData } from '../../API/CarouselData';

function Carousel() {
  const carouselRef = useRef();

  const clickPrev = (e) => {
    e.preventDefault();
    carouselRef.current.style.transform = 'translateX(100vw)';
  };

  const clickNext = (e) => {
    e.preventDefault();
    carouselRef.current.style.transform = 'translateX(-100vw)';
  };

  useEffect(() => {
    console.log(carouselRef.current.style);
  }, []);

  return (
    <CarouselWrap>
      <CarouselList ref={carouselRef}>
        {CarouselData.map((ele) => (
          <CarouselItem key={ele.id} imageUrl={ele.image}>
            <h2>{ele.title}</h2>
            <p>{ele.subtitle}</p>
          </CarouselItem>
        ))}
        <button className="btn prev" onClick={clickPrev}></button>
        <button className="btn next" onClick={clickNext}></button>
      </CarouselList>
    </CarouselWrap>
  );
}

export default Carousel;

const CarouselWrap = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

const CarouselList = styled.ul`
  display: flex;
  width: 300vw;
  height: 500px;
  transition: all 0.5s;
  .btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border-top: 2px solid ${PALLETS.BLACK};
    border-left: 2px solid ${PALLETS.BLACK};

    &.prev {
      left: 20px;
      transform: rotate(-45deg);
    }

    &.next {
      right: 20px;
      transform: rotate(135deg);
    }
  }
`;

const CarouselItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    opacity: 0.7;
    z-index: -10;
  }

  h2 {
    font-size: 2.5rem;
    font-family: 'GmarketSansBold';
    margin-bottom: 20px;
  }
`;
