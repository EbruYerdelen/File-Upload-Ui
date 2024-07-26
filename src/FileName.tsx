import { truncateFileName } from "./utils";

interface FileUploadProps {
  fileName: string;
}


const FileName = ({ fileName }: FileUploadProps) => {

  const truncatedFileName = truncateFileName(fileName, 20);
  
  return (
    <>
      {fileName ? (
        <span
          className={`p-[5px] font-medium text-[rgba(29,29,29,0.89)] text-md `}
        >
          {truncatedFileName}
        </span>
      ) : (
        <span className="p-2 text-[rgba(102,101,101,0.77)] font-thin text-md ">
          No file selected
        </span>
      )}
    </>
  );
};

export default FileName;
