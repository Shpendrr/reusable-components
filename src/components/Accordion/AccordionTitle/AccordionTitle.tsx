import Button from "@/components/Button/Button";
import React, { ButtonHTMLAttributes, memo } from "react";
import cn from "classnames";
import { useAccordionContext } from "../AccordionContext";

export interface AccordionTitleProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean;
}

const AccordionTitle: React.FC<AccordionTitleProps> = ({
  children,
  open,
  ...rest
}) => {
  const { handleToggle } = useAccordionContext();

  return (
    <Button
      className="w-full lg:w-[65%] mt-[50px] min-h-48 flex justify-between items-center p-4 border-[#d7d8df] border-b-2 bg-transparent text-base lg:mx-auto"
      onClick={handleToggle}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default memo(AccordionTitle);