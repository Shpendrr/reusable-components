import React, { FC, useCallback, useState } from "react";
import { AccordionContext, IAccordionContext } from "./AccordionContext";

export interface IAccordionContextProvider {
  children: React.ReactNode;
}

const AccordionContextProvider: FC<IAccordionContextProvider> = ({
  children,
}) => {
  const [localOpen, setLocalOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setLocalOpen((prev) => !prev);
  }, [localOpen]);

  const ContextValues: IAccordionContext = {
    localOpen,
    setLocalOpen,
    handleToggle,
  };
  return (
    <AccordionContext.Provider value={ContextValues}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionContextProvider;
