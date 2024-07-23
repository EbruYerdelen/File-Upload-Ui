import { useEffect, useRef, useState } from 'react';
import './App.css'
import FileName from './FileName';
import UploadBar from "./UploadBar";
import { UploadForm,fileSchema } from './Validation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isShowing, setIsShowing] = useState(false);
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const {
    handleSubmit,
    setValue,
  } = useForm<UploadForm>({
    resolver: zodResolver(fileSchema),
  });



  const handleFileChange = (file: File) => {
    if (file) {
      setFileName(file.name);
      setIsShowing(true);
      setProgress(0);

      const newIntervalId = setInterval(() => {
        setProgress((prev) => {
          const nextProgress = prev + 8;
          if (nextProgress >= 100) {
            clearInterval(newIntervalId);
            return 100;
          }
          return nextProgress;
        });
      }, 200);
      setIntervalId(newIntervalId);
    }
    console.log(file.name);
  };


  /*const onChooseFile = () => {
    inputRef.current?.click()
  }
    
    const onSubmit = (data: UploadForm) => {
  if (data.file) {
    handleFileChange(data.file);
  }
};
  */

  
  
  const removeFileHandler = () => {
    setIsShowing(false);
  };



  const onSubmit = () => {
    inputRef.current?.click();
  };



  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-screen p-8 flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center rounded-md bg-purple-50">
          <input
            ref={inputRef}
            type="file"
            onChange={(e) => {
              const file = e.target.files && e.target.files[0];
              if (file) {
                setValue("file", file);
                handleFileChange(file);
              }
            }}
            className=" self-start mb-4 p-2 border rounded-md"
            style={{ display: "none" }}
          />
          <div className="self-start mb-4">
            <button
              disabled={isShowing}
              type="submit"
              className="w-28 mb-0 ml-2 mt-2 p-2 bg-[#52249ddb] border-4 rounded-md border-solid border-[#9f84c1d9] text-white"
              //onClick={onChooseFile}
            >
              Browse..
            </button>
          </div>
          <hr className="w-full border-t border-gray-300" />
          <FileName show={isShowing} fileName={fileName} />
          {isShowing && (
            <div className="h-20 p-1 pl-4  w-full flex items-center justify-between rounded-md">
              <UploadBar progress={progress} show={isShowing} />
              <button onClick={removeFileHandler}>
                <img
                  alt="remove-icon"
                  src="/assets/icons/circle-minus.jpg"
                  className="m-5 mb-1 mt-2 w-7 h-7"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default App
