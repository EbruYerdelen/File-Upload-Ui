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
  title = "Video Record ",
  description = "Record video during session",
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
    <div className="h-screen flex flex-col justify-center">
      <div className="p-10">
        <div className="flex gap-2 p-4">
          <div
            className={`gap-1 p-[4.5px] transition-all duration-150 ease-in-out transform ${isChecked ? "scale-110" : ""}`}
          >
            <Radio
              name="MyRadioBtn"
              option={{ name: "MyRadioBtn", label: "", value: "Checked" }}
              control={control}
              variant="custom"
              onChange={setIsChecked}
              checked={isChecked}
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
    </div>
  );
};

export default RadioButtonCard;

