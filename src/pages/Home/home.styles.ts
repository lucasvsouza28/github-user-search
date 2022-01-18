import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  @media(min-width: 768px) {
    width: 500px;
  }
  @media(min-width: 1024px) {
    width: 750px;
  }
`;

