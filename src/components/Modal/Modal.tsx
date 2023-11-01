import React, { ReactNode, useEffect } from "react";
import { ModalContainer, ModalItems } from "./modal.styles";

type Props = {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  children: ReactNode;
};

export const CustomModal: React.FC<Props> = ({
  handleOpen,
  handleClose,
  open,
  children,
}) => {

  useEffect(() => {
    console.log(open);
    handleOpen();
  })
  return (
    <ModalContainer onClick={handleClose}>
      <div>
        <ModalItems>
          <div>
            <button onClick={handleClose}>&times;</button>
          </div>
          <div className="message">{children}</div>
        </ModalItems>
      </div>
    </ModalContainer>
  );
};
