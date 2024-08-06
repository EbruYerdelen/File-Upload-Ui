import { useState } from "react";
import { Checkbox } from "./Checkbox"; 
import { CheckboxList } from "./Checkbox.types"; 
import { useForm, FormProvider } from "react-hook-form";

type CheckboxCardProps = {
  title: string;
  description?: string;
  checked: boolean;
  onChangeHandle: (checked: boolean) => void;
};

const CheckboxCard = ({
  title = "Device & Usage Report",
  description = "Access device and usage reports",
  checked = false,
  onChangeHandle,
}: CheckboxCardProps) => {
  const [isChecked, setIsChecked]= useState(checked)
  const methods = useForm();
  const checkboxList: CheckboxList[] = [
    {
      id: 1,
      selected: isChecked,
      visible: true,
      value:"",
    },
  ];


  onChangeHandle = (param:boolean) => {
    setIsChecked(param);
  }



  return (
    <FormProvider {...methods}>
      <div className="w-screen h-screen flex flex-col justify-center">
        <div className="p-14">
          <div
            className={`flex gap-2 p-4 border bg-[rgba(249, 245, 255, 1)] rounded-xl transition-all duration-150 ease-in-out transform ${
              isChecked
                ? " border-2 border-purple-600 scale-[1.03]"
                : "border-gray-200"
            }`}
          >
            <div>
              <Checkbox
                checkboxHeaderLabel=""
                name="checkboxCard"
                checkboxList={checkboxList}
                control={methods.control}
                variant="primary"
                size="base"
                onChange={(activeIds) => onChangeHandle(activeIds.length > 0)}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div
                className={`text-base font-medium font-inter ${
                  isChecked ? "text-[rgba(83,56,158,1)]" : "text-gray-700"
                }`}
              >
                {title}
              </div>
              {description && (
                <div
                  className={`text-[15px] font-normal font-inter ${
                    isChecked ? "text-[rgba(105,65,198,1)]" : "text-gray-600"
                  }`}
                >
                  {description}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default CheckboxCard;







