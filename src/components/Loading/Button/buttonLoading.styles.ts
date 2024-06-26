import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ButtonLoadingStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 35px;
  height: 40px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    margin: 8px;
    border: 2px solid #fed;
    border-radius: 50%;
    animation: ${LoadingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fed transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
