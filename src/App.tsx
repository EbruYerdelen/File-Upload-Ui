import { useRef, useState } from 'react';
import './index.css';
import FileName from './FileName';
import { SubmitHandler, useForm } from 'react-hook-form';
import { XCircle } from "@phosphor-icons/react";

type UploadForm = {
  file: File | null;
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<UploadForm>();



  const handleFileChange = (file: File) => {
    if (file) {
      setFileName(file.name);
    }
    console.log(file.name);//checking if file.name is properly evaluated.
  };


  
  
  const removeFileHandler = () => {
    setFileName("");
    setValue("file", null);
    setIsSubmitted(false);
  };




const onSubmit : SubmitHandler<UploadForm>= (data) => {
  if (data.file) {
    setIsSubmitted(true);
    console.log(data.file);//a check to ensure submission is executed and file data is properly taken.
  }
};



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-screen p-8 flex flex-col justify-center">
        <div className="flex items-center justify-between rounded-md bg-[#f2edf8b0]">
          <div className="flex justify-center items-center">
            <input
              {...register("file", { required: true })}
              ref={inputRef}
              type="file"
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                  setValue("file", file);
                  handleFileChange(file);
                  e.target.value = "";
                }
              }}
              className=" self-start mb-4 p-2 border rounded-md"
              style={{ display: "none" }}
            />
            <div className="self-start mb-4">
              <button
                disabled={fileName ? true : false}
                type="button"
                onClick={() => inputRef.current?.click()}
                className="w-28 mb-0 ml-2 mt-3 p-2 bg-[#52249ddb] border-4 rounded-md border-solid border-[#9f84c1d9] text-white"
              >
                Browse..
              </button>
            </div>
            <FileName fileName={fileName} isSubmitted={isSubmitted} />
          </div>

          <div>
            {fileName && (
              <div className="h-20 p-1 pl-4 pr-5  w-full flex items-center justify-between gap-2 rounded-md">
                <button
                  className="font-medium text-[#181818ee]"
                  disabled={isSubmitted}
                  type="submit"
                >
                  Submit
                </button>
                <button type="button" onClick={removeFileHandler}>
                  <XCircle size={32} color="#5f4186" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default App





