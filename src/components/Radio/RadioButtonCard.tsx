import Radio, { Option } from "./Radio";
import { useForm, FormProvider } from "react-hook-form";

type RadioButtonCardProps = {
  title: string;
  description?: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
};

const RadioButtonCard = ({
  title = "Video Record",
  description = "Record video during session",
  checked = false,
  onChange,
}: RadioButtonCardProps) => {
  const methods = useForm({
    defaultValues: {
      radioOption: checked ? "checked" : "",
    },
  });

  const option: Option = {
    name: "radioOption",
    label: "",
    value: "checked",
  };

  const handleChange = (selected: boolean) => {
    if (onChange) {
      onChange(selected);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="h-screen flex flex-col justify-center">
        <div className="p-10">
          <div className="flex gap-2 p-4">
            <Radio
              name="radioOption"
              option={option}
              control={methods.control}
              variant="custom"
              onChange={handleChange}
              checked={checked}
            />
            <div className="flex flex-col justify-center">
              <div className="text-base font-medium font-inter text-gray-700">
                {title}
              </div>
              {description && (
                <div className="text-[15px] font-normal font-inter text-gray-600">
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

export default RadioButtonCard;

/*
import { useEffect, useState } from "react";

type RadioButtonProps = {
  title: string;
  description?: string;
  checked: boolean;
};

const RadioButtonCard = ({
  title = "Video Record ",
  description = "Record video during session",
  checked = false,
}: RadioButtonProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="p-10">
        <div className="flex gap-2 p-4">
          <div className="flex pt-[3px]">
            <input
              type="radio"
              checked={isChecked}
              onChange={handleChange}
              className={` h-[19px] w-[19px] transition-transform duration-200 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-0 focus:ring-offset-0 bg-transparent border border-slate-300 ${isChecked ? "text-[#6e40cf]  border-[rgba(127,86,217,1)]" : ""}`}
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-base font-medium font-inter text-gray-700 ">
              {title}
            </div>
            <div className="text-[15px] font-normal font-inter text-gray-600">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioButtonCard;
*/
