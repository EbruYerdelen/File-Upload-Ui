import { useEffect, useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { CheckboxList } from "../Checkbox/Checkbox.types";
import { useForm, FormProvider } from "react-hook-form";
import { Typography } from "../Typography";

export type CheckboxCardProps = {
  title: string;
  description?: string;
  checked: boolean;
  onChangeHandle: (checked: boolean) => void;
  id: number;
  disabled: boolean;
};

const CheckboxCard = ({
  title,
  description,
  checked,
  onChangeHandle,
  id,
  disabled,
}: CheckboxCardProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const methods = useForm();


  const checkboxList: CheckboxList[] = [
    {
      id: 1,
      selected: isChecked,
      visible: true,
      value: "",
    },
  ];


    const handleCheckboxChange = (isChecked: boolean) => {
      setIsChecked(isChecked);
      onChangeHandle(isChecked);
    };

useEffect(() => {
  setIsChecked(checked);
}, [checked]);

  return (
    <FormProvider {...methods}>
      <div data-testid="form-provider" className="max-w-full m-6 mb-2 mt-2">
        <div
          className={`flex p-4 border rounded-xl transition-all duration-150 ease-in-out transform ${
            isChecked
              ? " border-2 border-primary-600 scale-[1.01] bg-primary-50"
              : "border-gray-200 bg-white"
          }`}
        >
          <div>
            <Checkbox
              checkboxHeaderLabel=""
              name="checkboxCard"
              checkboxList={checkboxList}
              control={methods.control}
              variant="primary"
              size="small"
              onChange={(activeIds) =>
                handleCheckboxChange(activeIds.length > 0)
              }
              classname="relative top-[-12px] right-[-5px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Typography
              text={title}
              variant="p"
              isSmall={false}
              color={`${isChecked ? "text-primary-800" : "text-gray-700"}`}
              className="font-medium"
            />
            {description && (
              <Typography
                text={description}
                variant="p"
                isSmall={false}
                color={`${isChecked ? "text-primary-700" : "text-gray-600"}`}
                className="font-normal"
              />
            )}
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default CheckboxCard;


