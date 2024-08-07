import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "../Checkbox/Checkbox";
import { Typography } from "../Typography";

type CheckboxProps = {
  title: string;
  description?: string;
  checked: boolean;
};

interface IFormInputs {
  MyCheckbox: boolean;
}

const CheckboxCard = ({
  title = "Device & Usage Report",
  description = "Access device and usage reports",
  checked = false,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const { control,setValue } = useForm<IFormInputs>({
    defaultValues: {
      MyCheckbox: checked,
    },
  });

  const handleChange = (activeIds: number[]) => {
    const newCheckedState = activeIds.length > 0;
    setIsChecked(newCheckedState);
    setValue("MyCheckbox", newCheckedState);
  };

  useEffect(() => {
    setIsChecked(checked);
    setValue("MyCheckbox", checked);
  }, [checked, setValue]);




  return (
      <div className="w-screen flex items-center p-4">
        <div className="w-full max-w-4xl">
          <div
            className={`flex justify-start items-center p-4 border bg-primary-50 rounded-xl transition-all duration-150 ease-in-out transform ${isChecked ? " border-2 border-purple-600 scale-[1.03]" : "border-gray-200"}`}
          >
            <div className="pb-2">
              <Checkbox
                name="MyCheckbox"
                control={control}
                checkboxList={[
                  { id: 1, selected: isChecked, visible: true, value: "" },
                ]}
                variant="primary"
                size="base"
                onChange={handleChange}
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
  );
};

export default CheckboxCard;




