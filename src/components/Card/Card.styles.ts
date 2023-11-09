import styled from "styled-components";

interface CardProps {
  opacity?: number;
}

export const CardStyled = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 10rem;
  border-radius: 10px;
  padding: 1rem;

  opacity: ${(props) => props.opacity || 1};

  &.normal {
    background-color: ${({ theme }) => theme.colors.normal};
  }

  &.alert {
    background-color: ${({ theme }) => theme.colors.alert};
  }

  &.high {
    background-color: ${({ theme }) => theme.colors.high};
  }
`;

export const PStyled = styled.p`
  font-size: 3rem;
  text-align: center;
  padding: 0.5rem;

  &.on {
    color: ${({ theme }) => theme.text.on};
  }

  &.off {
    color: ${({ theme }) => theme.text.off};
  }
`;

export const H2Styled = styled.h2`
  padding-bottom: 1rem;
  font-size: 2.5rem;

  &.on {
    color: ${({ theme }) => theme.text.off};
  }

  &.off {
    color: ${({ theme }) => theme.text.primary};
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
  margin-top: 1rem;
  width: 100%;
  list-style-type: none;

  &.on {
    color: ${({ theme }) => theme.text.off};
  }

  &.off {
    color: ${({ theme }) => theme.text.primary};
  }
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`;

export const ButtonStyled = styled.button`
  position: relative;
  width: 8rem;
  padding: 1rem;
  border-radius: 2rem;
  border: none;
  margin: auto;
  margin-top: 1rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;

  &.on {
    background-color: ${({ theme }) => theme.colors.off};
    color: ${({ theme }) => theme.text.on};
  }

  &.off {
    background-color: ${({ theme }) => theme.colors.on};
    color: ${({ theme }) => theme.text.off};
  }
`;
