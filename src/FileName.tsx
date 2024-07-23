interface FileUploadProps {
  show: boolean;
  fileName: string;
}

const FileName = ({ show, fileName }: FileUploadProps) => {
  return (
    <>
      {show && (
        <div className="self-start p-3 pb-0 text-gray-700 font-medium text-md ">
          {fileName}
        </div>
      )}
    </>
  );
};

export default FileName;
