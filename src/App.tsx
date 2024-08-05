import { useEffect, useRef, useState } from 'react';
import "./App.css";
import FileName from './FileName';
import {useForm } from 'react-hook-form';
import { XCircle } from "@phosphor-icons/react";
import BrowseButton from './BrowseButton';


type UploadForm = {
  file: File | null;
}

type AppProps = {
  initialButtonName?: string;
  initialFileName?:string;
}


function App({initialButtonName= "Browse", initialFileName = ""}: AppProps) {
  const [buttonName, setButtonName] = useState(initialButtonName);
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState(initialFileName);

  const {
    register,
    setValue,
  } = useForm<UploadForm>();



useEffect(() => {
  setButtonName(initialButtonName);
}, [initialButtonName]);

useEffect(() => {
  setFileName(initialFileName);
}, [initialFileName]);

  


  const handleFileChange = (file: File) => {
    if (file) {
      setFileName(file.name);
    }
    console.log(file.name);//checking if file.name is properly evaluated.
  };


  
  
  const removeFileHandler = () => {
    setFileName("");
    setValue("file", null);
  };





  return (
    <form>
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
              className=" self-start border rounded-md"
              style={{ display: "none" }}
            />

            <div className="self-start">
              <BrowseButton
                fileName={fileName}
                inputRef={inputRef}
                buttonName={buttonName}
              />
            </div>
            <FileName fileName={fileName} />
          </div>

          <div>
            {fileName && (
              <div className="h-20 p-1 pl-4 pr-5  w-full flex items-center justify-between gap-2 rounded-md">
                <button
                  data-testid="removeFile"
                  type="button"
                  onClick={removeFileHandler}
                  className="transform transition-transform duration-200 hover:scale-105"
                >
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






