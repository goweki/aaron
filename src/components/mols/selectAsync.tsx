"use client";

import { cn } from "@/lib/utils";
import React from "react";
import AsyncSelect from "react-select/async";

const SelectAsync = ({
  loadOptions,
  onChange,
  defaultValue,
  defaultOptions,
  placeholder,
}: {
  loadOptions: (
    inputValue: string
  ) => Promise<{ label: string; value: string }[]>;
  onChange?: (newValue: any, actionMeta: any) => void;
  defaultValue?: any;
  defaultOptions?: any[];
  placeholder?: string;
}) => {
  return (
    <AsyncSelect
      unstyled
      classNames={{
        // Tailwind classes for the control (input container)
        control: () =>
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", // Gray border when not focused
        // Tailwind classes for the dropdown menu
        menu: () => "bg-popover text-foreground p-1 text-sm rounded-sm mt-1",
        // Tailwind classes for the individual options
        option: (state) =>
          cn(
            state.isFocused
              ? "bg-accent" // Background when option is focused
              : "", // Default background
            "p-2 rounded-sm"
          ),
        // Tailwind classes for the placeholder text
        placeholder: () => "italic opacity-50",
        // Tailwind classes for the input field
        input: () => "",
        // Tailwind classes for the dropdown indicator (the arrow icon)
        dropdownIndicator: () => "opacity-50 h-4 w-4",
      }}
      loadOptions={loadOptions}
      cacheOptions
      placeholder={placeholder}
      onChange={onChange} // Manually update the value
      defaultValue={defaultValue}
      defaultOptions={defaultOptions}
    />
  );
};

export default SelectAsync;
