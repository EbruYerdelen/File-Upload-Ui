import { useEffect, useState } from "react"

type CheckboxProps = {
  title: string,
  description?: string,
  checkedbox: boolean,
}


const CheckboxCard = ({
  title = "Device & Usage Report",
  description = "Access device and usage reports",
  checkedbox=false,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checkedbox);


  useEffect(() => {
    setIsChecked(checkedbox);
  }, [checkedbox]);
  

  return (
    <div>
      <div className="w-screen h-screen flex flex-col justify-center">
        <div className="p-14">
          <div
            className={`flex gap-2 p-4 border bg-[rgba(249, 245, 255, 1)] rounded-xl transition-all duration-150 ease-in-out transform ${isChecked ? " border-2 border-purple-600 scale-[1.03]" : "border-gray-200"}`}
          >
            <div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className={` h-[17px] w-[17px] transition-transform duration-200 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-0 focus:ring-offset-0 rounded-[4.5px] bg-transparent border border-slate-300 ${isChecked ? "text-[rgba(127,86,217,1)]  border-[rgba(127,86,217,1)]" : ""}`}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div
                className={`text-base font-medium font-inter ${isChecked ? "text-[rgba(83,56,158,1)]" : "text-gray-700"}`}
              >
                {title}
              </div>
              <div
                className={`text-[15px] font-normal font-inter ${isChecked ? "text-[rgba(105,65,198,1)]" : "text-gray-600"}`}
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxCard
