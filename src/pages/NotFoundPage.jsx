import styled from 'styled-components';
import err2 from '../images/404.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
  margin: -35px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    block-size: 100vh;
    inline-size: 100vw;
  }
`;

const Title = styled.h1`
  font-size: 35px;
  position: absolute;
  color: #504f4f;
  text-shadow: 0 0 5px #99cbdd, 0 0 10px #99cbdd, 0 0 20px #99cbdd,
    0 0 40px #99cbdd, 0 0 80px #99cbdd;
  transition: 0.8s;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
  &:hover {
    scale: 1.1;
  }
`;

export default function NotFoundPage() {
  const [text, setText] = useState('PAGE NOT FOUND');
  const handleMouseEnter = () => {
    setText('CLICK TO GO HOME');
  };

  const handleMouseLeave = () => {
    setText('PAGE NOT FOUND');
  };

  return (
    <Container>
      <img src={err2} alt="books" />
      <Title>
        <NavLink
          to="/recommended"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </NavLink>
      </Title>
    </Container>
  );
}
