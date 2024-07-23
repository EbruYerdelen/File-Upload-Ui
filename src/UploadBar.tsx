
interface UploadBarProps {
  progress: number;
  show: boolean;
}

const UploadBar = ({ progress ,show }: UploadBarProps) => {
  return (
    <>
      {show && (
        <div className="w-full flex-col max-w-xl">
          <div className="flex items-center justify-between mb-2">
            {progress == 100 ? (
              <span className="text-gray-700 font-medium">Done</span>
            ) : (
              <span className="text-gray-700 font-medium">Loading...</span>
            )}
            <span className="text-gray-700 font-medium">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-[#52249ddb] h-full rounded-full"
              style={{ width: `${progress}%` }}
            >
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadBar;
