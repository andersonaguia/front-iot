import styled from "styled-components";

export const NavStyled = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
background-color: ${({theme}) => theme.colors.primary};
padding: 2rem 1.5rem 1.5rem 0;
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
`;

export const TitleStyled = styled.h1`
font-size: 3rem;
font-weight: 600;
color: ${({theme}) => theme.text.primary};
letter-spacing: 1px;
`;

export const LogoStyled = styled.img`
  height: 4rem;
`;

export const ButtonStyled = styled.button`
width: 40px;
height: 40px;
cursor: pointer;
border: none;
background-color: transparent;

.btn-theme{
  width: 100px;
}
`
