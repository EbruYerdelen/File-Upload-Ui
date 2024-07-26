
type BrowseButtonProps = {
  fileName: string;
  inputRef: React.RefObject<HTMLInputElement>;
  buttonName: string;
};


const BrowseButton = ({fileName, inputRef,buttonName }:BrowseButtonProps) => {
  return (
    <>
      <button
        disabled={fileName ? true : false}
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-28 m-3 ml-4 p-[0.60rem] bg-[#52249ddb] border-4 rounded-md border-solid border-[#9f84c1d9] text-white hover:bg-[#653fa1e7] transform transition-transform duration-100 hover:scale-[1.01]"
      >
        {buttonName}
      </button>
    </>
  );
}

export default BrowseButton