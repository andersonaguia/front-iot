import {
    NavStyled,
    TitleStyled,
    LogoStyled,
    HeaderStyled,
    ButtonStyled,
  } from "./header.styles";
  import logoSolar from "../../assets/solar.png";
  import { BsMoonStarsFill } from "react-icons/bs";
  import { BsSunFill } from "react-icons/bs";
  import { BiLogIn } from "react-icons/bi";
  import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
  import { useNavigate } from "react-router-dom";
  
  export const Header: React.FC = () => {
    const { theme, handleTheme } = useCustomTheme();
  
    const navigate = useNavigate();
  
    const logout = () => {
      navigate("/signin");
    };
  
    return (
      <NavStyled>
        <HeaderStyled>
          <LogoStyled src={logoSolar} alt="logo solar tambau" />
          <TitleStyled>Solar Connect</TitleStyled>
        </HeaderStyled>
  
        <ButtonStyled onClick={() => logout()}>
          <BiLogIn size={35} color={theme === "dark" ? "#ffffff" : "#000000"} />
        </ButtonStyled>
  
        <ButtonStyled onClick={handleTheme}>
          {theme === "dark" ? (
            <BsSunFill size={25} color="#f5d20a" />
          ) : (
            <BsMoonStarsFill size={20} />
          )}
        </ButtonStyled>
      </NavStyled>
    );
  };
  