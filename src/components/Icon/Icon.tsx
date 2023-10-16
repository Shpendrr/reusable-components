import { IconType } from "@/lib/constants/icon-type";
import { memo } from "react";
import DownArrowIcon from "@/components/Icon/IconType/DownArrowIcon";

interface IIconProps {
  iconType: IconType | string;
  className?: string;
}

interface IconComponentMap {
  [key: string]: React.MemoExoticComponent<
    ({ className }: { className?: string }) => JSX.Element
  >;
}

const iconComponents: IconComponentMap = {
  [IconType.DOWN_ARROW_ICON]: DownArrowIcon,
};

function Icon({ iconType, className }: IIconProps) {
  const IconComponent = iconComponents[iconType];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} />;
}

export default memo(Icon);
