/*
  Checkbox v1.0
  Author: <Erdem Sert> ersert@netas.com.tr
  Changes to implement in next versions:
    - Handle error message
*/
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { classNames } from '../../helpers/styleHelpers';
import { CheckboxList, ICheckboxProps } from "./Checkbox.types";

const Checkbox = ({
  checkboxHeaderLabel,
  name,
  size,
  reverse,
  variant,
  control,
  onChange,
  required,
  checkboxList,
  orientation,
  classname
}: ICheckboxProps): JSX.Element => {
  let LABEL_SPAN_CLASS = "ml-2";
  const [listCheckbox, setListCheckbox] =
    useState<CheckboxList[]>(checkboxList);

  const onHandleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: { onChange: (activeCheckboxIds: number[]) => void }
  ): void => {
    const newList: CheckboxList[] = [...listCheckbox];
    newList[index] = {
      ...checkboxList[index],
      selected: e.target.checked,
    };
    setListCheckbox(newList);
    const activeCheckboxIds: number[] = [];
    newList.forEach((item) => {
      if (item.selected === true) activeCheckboxIds.push(item.id);
    });
    field.onChange(activeCheckboxIds);
    if (onChange) onChange(activeCheckboxIds);
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field, formState }) => (
          <>
            <div className={classNames("flex flex-col flex-grow mb-1")}>
              <label
                className={classNames(
                  "block leading-5 mb-2",
                  "font-medium text-gray-800 text-md"
                )}
              >
                {checkboxHeaderLabel}
                {required && checkboxHeaderLabel && (
                  <span className={LABEL_SPAN_CLASS} role="required">
                    *
                  </span>
                )}
              </label>
              <div
                className={classNames(
                  orientation === "vertical" && "flex-col ml-1",
                  orientation === "horizontal" && "flex-row mr-1",
                  "flex"
                )}
                role="container"
              >
                {listCheckbox.map((item, index) => {
                  return (
                    item?.visible && (
                      <label
                        className={classNames("inline-flex items-center mt-2")}
                        key={index}
                      >
                        <input
                          ref={(input) => {
                            if (input) {
                              if (item.selected) {
                                input.indeterminate = false;
                              } else {
                                input.indeterminate =
                                  item.indeterminate || false;
                              }
                            }
                          }}
                          data-testid={item?.id}
                          type="checkbox"
                          className={classNames(
                            reverse ? "ml-1 order-2 mr-4" : "mr-1 order-1",
                            variant === "primary" &&
                              !item?.disabled &&
                              `accent-primary-700 hover:accent-primary-800 ${classname}`,
                            variant === "primary" &&
                              item?.disabled &&
                              "accent-primary-50",
                            variant === "secondary" &&
                              !item?.disabled &&
                              `accent-gray-50 ${classname}`,
                            variant === "secondary" &&
                              item?.disabled &&
                              "accent-gray-300 border-gray-300 bg-transparent",
                            (size === "base" || !size) && "h-5 w-5 rounded",
                            size === "small" && "h-4 w-4 rounded-sm",
                            size === "xsmall" && "h-3 w-3 rounded-none",
                            size === "normal" && "h-6 w-6 rounded-md",
                            size === "large" && "h-7 w-7 rounded-lg",
                            !item?.disabled && "cursor-pointer"
                          )}
                          disabled={item?.disabled}
                          checked={item?.selected}
                          onChange={(e) => onHandleCheckbox(e, index, field)}
                        />
                        <span
                          className={classNames(
                            reverse ? "mr-1 order-1" : "ml-1 order-2 mr-4",
                            "text-gray-700",
                            !item?.disabled && "cursor-pointer",
                            (size === "base" || !size) && "text-base",
                            size === "small" && "text-sm",
                            size === "xsmall" && "text-xs",
                            size === "normal" && "text-lg",
                            size === "large" && "text-xl"
                          )}
                        >
                          {item?.value}
                          {required && item?.required && (
                            <span
                              className={LABEL_SPAN_CLASS}
                              role="requiredItem"
                            >
                              *
                            </span>
                          )}
                        </span>
                      </label>
                    )
                  );
                })}
              </div>
              {/*
                TODO: React-hook-form error messsages should be handled in below but we have translation issue to consider
                */}
            </div>
          </>
        )}
      />
    </>
  );
};
export { Checkbox };
