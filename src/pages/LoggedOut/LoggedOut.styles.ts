import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & h2 {
    color: ${({ theme }) => theme.text.primary};
  }
`;
