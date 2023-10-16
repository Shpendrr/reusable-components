import React, { FC, memo } from "react";

export interface IAccordionBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  children: React.ReactNode;
}

const AccordionBody: FC<IAccordionBodyProps> = ({ open, children, ...rest }) => {
  const bodyStyle = `
    ${open ? "h-auto" : "h-0"}
    ${open ? "visible overflow-visible scale-y-100" : "invisible overflow-hidden scale-y-0"}
    transition-transform transition-height duration-200
  `;

  return (
    <div className={`p-4 w-full lg:w-[65%] lg:mx-auto ${bodyStyle}`} {...rest}>
      {children}
    </div>
  );
};

export default memo(AccordionBody);