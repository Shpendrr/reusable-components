import { createContext, useContext } from "react"


export interface IAccordionContext {
    localOpen: boolean;
    setLocalOpen?: (value: boolean) => void;
    handleToggle: () => void;
}


export const defaultValues: IAccordionContext = {
    localOpen: false,
    setLocalOpen: () => { },
    handleToggle: () => { }
}



export const AccordionContext = createContext<IAccordionContext>(defaultValues);


export const useAccordionContext = (): IAccordionContext => useContext(AccordionContext);

