import { FC, ReactNode } from "react";

interface IConditionalRendererProps {
  condition: boolean;
  render: () => ReactNode;
}

const ConditionalRenderer: FC<IConditionalRendererProps> = ({
  condition,
  render,
}) => {
  return condition ? render() : null;
};

export default ConditionalRenderer;
