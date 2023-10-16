import React, { memo, useState, useMemo, Children, useCallback } from "react";
import cn from "classnames";
import AccordionTitle from "@/components/Accordion/AccordionTitle/AccordionTitle";
import AccordionBody from "@/components/Accordion/AccordionBody/AccordionBody";
import { useAccordionContext } from "./AccordionContext";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  open?: boolean;
}

function Accordion(props: AccordionProps): React.ReactElement {
  const { children, open, ...rest } = props;

  const { handleToggle, localOpen } = useAccordionContext();

  const processedChildren = useMemo(() => {
    return Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;

      const isOpen = open !== undefined ? open : localOpen;

      if (index === 0) {
        return <AccordionTitle {...child.props} open={isOpen} />;
      }

      if (index === 1) {
        return <AccordionBody {...child.props} open={isOpen} />;
      }

      return child;
    });
  }, [children, localOpen, open, handleToggle]);

  return (
    <div className={cn("w-full")} {...rest}>
      {processedChildren}
    </div>
  );
}

export default memo(Accordion);
