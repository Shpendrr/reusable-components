import React, { ReactNode } from "react";

interface IFormWrapperProps {
  children: ReactNode;
}

const FormWrapper: React.FC<IFormWrapperProps> = ({ children, ...rest }) => {
  return <form {...rest}>{children}</form>;
};

export default FormWrapper;
