import React, { useRef } from 'react';
import styled from 'styled-components';
import { PALLETS } from '../../utils/constants';
import { CarouselData } from '../../API/CarouselData';

function Carousel() {
  // carousel 이벤트 함수
  const carouselRef = useRef();
  let current = 0;
  const endPoint = Math.ceil(CarouselData.length / 2);
  const prevPoint = CarouselData.length % 2 === 0 ? endPoint + 1 : endPoint;

  // 버튼 클릭 시 carousel 이동
  const clickPrev = (e) => {
    e.preventDefault();
    current += 100;
    carouselRef.current.style.transition = 'all .5s ease-in-out';
    carouselRef.current.style.transform = `translateX(${current}vw)`;
    if (current === 100 * prevPoint) {
      setTimeout(() => {
        current = -(100 * endPoint - 100);
        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = `translateX(${current}vw)`;
      }, 500);
    }
  };

  const clickNext = (e) => {
    e.preventDefault();
    current -= 100;
    carouselRef.current.style.transition = 'all .5s';
    carouselRef.current.style.transform = `translateX(${current}vw)`;
    if (current === -100 * endPoint) {
      setTimeout(() => {
        current = 100 * endPoint - 100;
        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = `translateX(${current}vw)`;
      }, 500);
    }
  };

  // 컴포넌트
  const firstItem = CarouselData.find((ele) => ele.id === CarouselData.length);
  const lastItem = CarouselData.find((ele) => ele.id === 1);

  const Carousels = () => {
    return (
      <CarouselList ref={carouselRef}>
        <CarouselItem key={firstItem.id} imageUrl={firstItem.image}>
          <h3>{firstItem.title}</h3>
          <p>{firstItem.subtitle}</p>
        </CarouselItem>
        {CarouselData.map((ele) => (
          <CarouselItem key={ele.id} imageUrl={ele.image}>
            <h3>{ele.title}</h3>
            <p>{ele.subtitle}</p>
          </CarouselItem>
        ))}
        <CarouselItem key={lastItem.id} imageUrl={lastItem.image}>
          <h3>{lastItem.title}</h3>
          <p>{lastItem.subtitle}</p>
        </CarouselItem>
      </CarouselList>
    );
  };

  return (
    <CarouselWrap>
      <h2 className="blind">carousel 영역입니다.</h2>
      <Carousels />
      <CarouselControl>
        <button type="button" className="btn prev" onClick={clickPrev}></button>
        <button type="button" className="btn next" onClick={clickNext}></button>
      </CarouselControl>
    </CarouselWrap>
  );
}

export default Carousel;

const CarouselWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
`;

const CarouselList = styled.ul`
  display: flex;
  width: ${100 * (CarouselData.length + 2)}vw;
  height: 500px;
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
    width: 100vw;
    height: 100%;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    opacity: 0.7;
    z-index: -10;
  }

  h3 {
    font-size: 2.5rem;
    font-family: 'GmarketSansBold';
    margin-bottom: 20px;
  }
`;

const CarouselControl = styled.div`
  .btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-top: 4px solid ${PALLETS.BLACK};
    border-left: 4px solid ${PALLETS.BLACK};

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
