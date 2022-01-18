import { useTheme } from 'styled-components';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { DefaultTheme } from 'styled-components';
import { LightTheme, DarkTheme } from '../../themes';
import * as SC from './header.styles';

type HeaderProps = {
  currentTheme: DefaultTheme;
  setTheme: (theme: DefaultTheme) => void;
};

export const Header = ({
  currentTheme,
  setTheme,
}: HeaderProps) => {

  const handleThemeToggle = () => setTheme(currentTheme === LightTheme ? DarkTheme : LightTheme);

  return (
    <SC.Container>
      <SC.Logo>
        devfinder
      </SC.Logo>
      <SC.ThemeSwitcherContainer
        onClick={handleThemeToggle}
      >
        { currentTheme === LightTheme ? <BsFillMoonFill color={currentTheme.color.text.black} /> : <BsFillSunFill color={currentTheme.color.text.black} /> }
      </SC.ThemeSwitcherContainer>
    </SC.Container>
  )
}
