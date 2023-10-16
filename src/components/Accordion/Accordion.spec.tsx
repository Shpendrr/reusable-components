import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";
import AccordionContextProvider from "@/components/Accordion/AccordionContextProvider";
import AccordionTitle from "@/components/Accordion/AccordionTitle/AccordionTitle";
import AccordionBody from "@/components/Accordion/AccordionBody/AccordionBody";
import "@testing-library/jest-dom";

describe("Accordion", () => {
  it("should render the title and body components", () => {
    const { getByText } = render(
      <AccordionContextProvider>
        <Accordion>
          <AccordionTitle>Accordion Title</AccordionTitle>
          <AccordionBody>Accordion Body</AccordionBody>
        </Accordion>
      </AccordionContextProvider>
    );

    expect(getByText("Accordion Title")).toBeInTheDocument();
    expect(getByText("Accordion Body")).toBeInTheDocument();
  });

  it("should toggle the accordion body when the title is clicked", () => {
    const { getByText } = render(
      <AccordionContextProvider>
        <Accordion>
          <AccordionTitle>Accordion Title</AccordionTitle>
          <AccordionBody>Accordion Body</AccordionBody>
        </Accordion>
      </AccordionContextProvider>
    );

    const title = getByText("Accordion Title");
    const body = getByText("Accordion Body");

    expect(body).not.toBeVisible();

    fireEvent.click(title);

    expect(body).toBeVisible();

    fireEvent.click(title);

    expect(body).not.toBeVisible();
  });
  it("should match the snapshot", () => {
    const { container } = render(
      <AccordionContextProvider>
        <Accordion>
          <AccordionTitle>Accordion Title</AccordionTitle>
          <AccordionBody>Accordion Body</AccordionBody>
        </Accordion>
      </AccordionContextProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
