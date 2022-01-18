import { DefaultTheme } from 'styled-components';
import { Header } from '../../components/Header';
import { SearchInput } from '../../components/SearchInput';
import { UserInfo } from '../../components/UserInfo';
import { useUser } from '../../contexts/UserContext';
import * as SC from './home.styles';

type HomeProps = {
  currentTheme: DefaultTheme,
  setTheme: (theme: DefaultTheme) => void;
};

export const Home = ({
  currentTheme,
  setTheme
}: HomeProps) => {
  const { user, } = useUser();

  return (
    <SC.Container>
      <Header
        currentTheme={currentTheme}
        setTheme={setTheme}
      />
      <SearchInput />

      { user && (
        <UserInfo
          user={user}
        />
      )}

    </SC.Container>
  )
}
