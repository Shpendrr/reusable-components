import React, { FC } from "react";

export interface IOption {
  value: string;
  label: string;
}

export interface ICustomSelect<T> {
  options: T;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: FC<ICustomSelect<IOption[]>> = ({
  options,
  value,
  onChange,
  ...rest
}) => {
  return (
    <select value={value} {...rest} onChange={onChange}>
      {options?.map((option: IOption) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
