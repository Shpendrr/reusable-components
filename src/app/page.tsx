"use client";
import AccordionContextProvider from "@/components/Accordion/AccordionContextProvider";

export default function Home() {
  return (
    <AccordionContextProvider>
      <main></main>
    </AccordionContextProvider>
  );
}
