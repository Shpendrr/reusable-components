import React from "react";
import Accordion, { AccordionProps } from "@/components/Accordion/Accordion";
import AccordionTitle from "@/components/Accordion/AccordionTitle/AccordionTitle";
import AccordionBody from "@/components/Accordion/AccordionBody/AccordionBody";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

const Template = (args: React.JSX.IntrinsicAttributes & AccordionProps) => (
  <Accordion {...args}>
    <AccordionTitle>Accordion Title</AccordionTitle>
    <AccordionBody>Accordion Body</AccordionBody>
  </Accordion>
);

export const Default = Template.bind({});
