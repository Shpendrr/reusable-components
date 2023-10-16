"use client";
import Accordion from "@/components/Accordion/Accordion";
import AccordionBody from "@/components/Accordion/AccordionBody/AccordionBody";
import AccordionContextProvider from "@/components/Accordion/AccordionContextProvider";
import AccordionTitle from "@/components/Accordion/AccordionTitle/AccordionTitle";

export default function Home() {
  return (
    <AccordionContextProvider>
      <main>
        <Accordion>
          <AccordionTitle>hehehehe</AccordionTitle>
          <AccordionBody>ehehehehe</AccordionBody>
        </Accordion>
      </main>
    </AccordionContextProvider>
  );
}
