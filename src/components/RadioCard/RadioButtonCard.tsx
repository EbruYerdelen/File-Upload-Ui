import { useEffect, useState } from "react";
import Radio from "../Radio/Radio";
import { useForm } from "react-hook-form";
import { Typography } from "../Typography";

type RadioButtonProps = {
  title: string;
  description?: string;
  checked: boolean;
};
interface IFormInputs {
  MyRadioBtn: boolean;
}

const RadioButtonCard = ({
  title,
  description,
  checked = false,
}: RadioButtonProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const { control } = useForm<IFormInputs>({
    defaultValues: {
      MyRadioBtn: false,
    },
  });

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
      <div>
        <div className="flex">
          <div
            className={`gap-1 p-[4.5px] transition-all duration-150 ease-in-out transform ${isChecked ? "scale-110" : ""}`}
          >
            <Radio
              name="MyRadioBtn"
              option={{ name: "MyRadioBtn", label: "", value: "Checked" }}
              control={control}
              variant="default"
              onChange={setIsChecked}
              checked={isChecked}
              classname="accent-primary-600 hover:accent-primary-700"
            />
          </div>

          <div className="flex flex-col justify-center">
            <Typography
              text={title}
              variant="p"
              isSmall={false}
              color="text-gray-700"
              className="font-medium"
            />
            {description && (
              <Typography
                text={description}
                variant="p"
                isSmall={false}
                color="text-gray-600"
                className="font-normal"
              />
            )}
          </div>
        </div>
      </div>
  );
};

export default RadioButtonCard;

