import styled from "styled-components";

interface CardProps {
  opacity?: number;
}

export const CardStyled = styled.div<CardProps>`
  display: flex;
  flex-direction: column;

  width: 14rem;
  height: 4rem;
  border-radius: 10px;
  padding: .5rem 1rem;

  opacity: ${(props) => props.opacity || 1};

  &.on {
    background-color: ${({ theme }) => theme.colors.on};
  }

  &.off {
    background-color: ${({ theme }) => theme.colors.off};
  }
`;

export const H3Styled = styled.h3`
  font-weight: 400;

  &.on {
    color: ${({ theme }) => theme.text.off};
  }

  &.off {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style-type: none;

  &.on {
    color: ${({ theme }) => theme.text.off};
  }

  &.off {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  
  &:hover {
    opacity: 0.8;
  }
`;

