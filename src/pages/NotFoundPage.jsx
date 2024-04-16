import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;

const Title = styled.h1`
  color: #ffffff;
  text-shadow: 0 0 5px #00baff, 0 0 10px #00baff, 0 0 20px #00baff,
    0 0 40px #00baff, 0 0 80px #00baff;
`;

export default function NotFoundPage() {
  return (
    <Container>
      <Title>404</Title>
    </Container>
  );
}
