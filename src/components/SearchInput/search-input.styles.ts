import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 1rem;
  background-color: ${ props => props.theme.color.bg.element };
  border-radius: 4px;
`;

export const SearchUserInput = styled.input`
  flex: 1;
  background-color: transparent;
  padding: 1rem;
  outline: none;
  border: none;
  color: ${ props => props.theme.color.text.black };
`;
