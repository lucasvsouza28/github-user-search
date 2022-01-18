import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-gap: 1rem;
  background-color: ${ props => props.theme.color.bg.element };
  border-radius: 4px;
  padding: 2rem;
`;

export const Avatar = styled.img`
  grid-column: 1;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 0.8rem;
  margin-bottom: 1rem;
`;

export const Username = styled.span`
  grid-column: 1;
  font-weight: bold;
`;

export const ProfileAnchor = styled.a`
  grid-column: 1;
  color: ${ props => props.theme.color.text.anchor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const AccountCreationDate = styled.span`
  grid-column: 1;
  grid-row: 3;
  @media(min-width: 1024px){
    grid-column: 2;
    grid-row: 1;
    text-align: right;
  }
`;

export const Bio = styled.p`
  grid-column: 1 / 3;
  color: ${ props => props.theme.color.text.secondary };
  margin-bottom: 1rem;
  @media(min-width: 1024px){
    grid-column: 2 / 3;
  }
`;

export const RepoStats = styled.div`
  display: grid;
  grid-column: 1 / 3;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${ props => props.theme.color.bg.body };
  border-radius: 4px;
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
  }
  @media(min-width: 1024px) {
    grid-column: 2 / 3;
  }
`;

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StatsItemTitle = styled.span`
  color: ${ props => props.theme.color.text.secondary };
  font-size: 14px;
`;

export const StatsItemText = styled.span`
  color: ${ props => props.theme.color.text.black };
  font-weight: bold;
  font-size: 16px;
`;

export const Links = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-column: 1 / 3;
  @media(min-width: 767px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
    grid-column: 2/ 3;
  }
`;

export const LinkItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const LintItemText = styled.span<{ noData?: boolean }>`
  color: ${props => props.noData ? props.theme.color.text.secondary : props.theme.color.text.black };
`;

export const LintItemAnchor = styled.a<{ noData?: boolean }>`
  text-decoration: none;
  color: ${props => props.noData ? props.theme.color.text.secondary : props.theme.color.text.black };
`;
