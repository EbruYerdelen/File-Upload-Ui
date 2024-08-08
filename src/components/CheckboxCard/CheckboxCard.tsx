import { useEffect, useState } from "react";
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
  checked,
  onChangeHandle,
  id
}: CheckboxCardProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [checkboxList, setCheckboxList] = useState<CheckboxList[]>([
    {
      id: id,
      selected: isChecked,
      visible: true,
      value: "",
    },
  ]);
  const methods = useForm();
  

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsChecked(isChecked);
    onChangeHandle(isChecked);
  };
  
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  
  console.log(isChecked);//isChecked manuel olarak butona tıklayınca gerektiği gibi değişiyor.
  console.log(checked);//Ancak checked,base story de hep false olarak kalırken checked isimli storyde hep true kalıyor.Toggle yapmıyor.

  return (
    <FormProvider {...methods}>
      <div
        data-testid="form-provider"
      >
        <div className="max-w-full m-6 mb-2 mt-2">
          <div
            className={`flex p-4 border bg-primary-50 rounded-xl transition-all duration-150 ease-in-out transform ${
              isChecked
                ? " border-2 border-primary-600 scale-[1.01]"
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
                size="small"
                onChange={(activeIds) =>
                  handleCheckboxChange(activeIds.length > 0)
                }
                classname="relative top-[-12px] right-[-5px] m-0 p-0"
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

/*
checkBoxList'i state içerisine almadığımda kod aşağıda şekilde idi:

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
  console.log(isChecked);
*/


