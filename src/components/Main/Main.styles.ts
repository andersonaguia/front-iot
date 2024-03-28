import styled from 'styled-components';

export const MainStyled = styled.main`
display: flex;
justify-content: space-evenly;



width: 100%;
min-height: 85vh;
background-color: ${({theme}) => theme.colors.primary};
padding: 2rem;
`