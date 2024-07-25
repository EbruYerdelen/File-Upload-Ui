interface FileUploadProps {
  fileName: string;
  isSubmitted: boolean;
}

const FileName = ({ fileName , isSubmitted }: FileUploadProps) => {
  console.log(isSubmitted)
  return (
    <>
      {fileName ? (
        <span
          className={`p-[5px] ml-3 ${isSubmitted ? "font-medium text-[rgba(29,29,29,0.89)]" : "font-thin text-[rgba(105,105,105,0.78)] dashed-border-animation"} text-md `}
        >
          {fileName}
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
