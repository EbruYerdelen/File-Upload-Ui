import { useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { CheckboxList } from "../Checkbox/Checkbox.types";
import { useForm, FormProvider } from "react-hook-form";
import { Typography } from "../Typography";

type CheckboxCardProps = {
  title: string;
  description?: string;
  checked: boolean;
  onChangeHandle: (checked: boolean) => void;
  id:number,
};

const CheckboxCard = ({
  title,
  description,
  checked = false,
  onChangeHandle,
  id
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

  return (
    <FormProvider {...methods}>
      <div
        data-testid="form-provider"
        className="w-screen flex flex-row justify-center items-center"
      >
        <div className="w-full max-w-4xl">
          <div
            className={`flex p-3 border bg-primary-50 rounded-xl transition-all duration-150 ease-in-out transform ${
              isChecked
                ? " border-2 border-purple-600 scale-[1.03]"
                : "border-gray-200"
            }`}
          >
            <div className="pb-[8.5px]">
              <Checkbox
                checkboxHeaderLabel=""
                name="checkboxCard"
                checkboxList={checkboxList}
                control={methods.control}
                variant="primary"
                size="base"
                onChange={(activeIds) =>
                  handleCheckboxChange(activeIds.length > 0)
                }
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
      </div>
    </FormProvider>
  );
};

export default CheckboxCard;

