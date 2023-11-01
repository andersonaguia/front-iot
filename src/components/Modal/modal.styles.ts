import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(200, 200, 200, 0.4);
`;

export const ModalItems = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  color: ${({ theme }) => theme.text.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;

  & ul {
    list-style-type: none;
    display: flex;
    flex-direction:column;
    gap: .5rem;

    & p{
      text-align: center;
    }
  }

  & div {
    width: 100%;
  }

  & button {
    color: ${({ theme }) => theme.text.primary};
    border: none;
    font-size: 2rem;
    cursor: pointer;
    float: right;
    height: 50px;
    width: 50px;
    background-color: transparent;
    &:hover {
      opacity: 0.8;
    }
  }
`;
