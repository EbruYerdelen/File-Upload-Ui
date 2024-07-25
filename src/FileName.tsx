import { File, FileDashed } from "@phosphor-icons/react";
import { truncateFileName } from "./utils";

interface FileUploadProps {
  fileName: string;
  isSubmitted: boolean;
}

const FileName = ({ fileName, isSubmitted }: FileUploadProps) => {
  const truncatedFileName = truncateFileName(fileName, 20);
  return (
    <>
      {fileName ? (
        <span
          className={`p-[5px] ml-3 ${isSubmitted ? "font-medium text-[#1d1d1de3]" : "font-thin text-[rgba(105,105,105,0.78)]"} text-sm `}
        >
          {isSubmitted ? (
            <div className="flex justify-center items-center gap-[2px]">
              <File size={28} color="#1d1d1de3" />
              <span className="sm:text-base">{truncatedFileName}</span>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-[2px]">
              <FileDashed size={28} color="#afafaf" />
              <span className="text-[16px]">{truncatedFileName}</span>
            </div>
          )}
        </span>
      ) : (
        <span className="p-3 text-[rgba(102,101,101,0.77)] font-thin text-md ">
          No file selected
        </span>
      )}
    </>
  );
};

export default FileName;
