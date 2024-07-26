
export const truncateFileName = (fileName: string, maxLength: number) => {

  if (fileName.length <= maxLength) {
    return fileName;
  }

  const extension = fileName.slice(fileName.lastIndexOf(".")); //lastIndexOf() returns the index of the last occurrence of a specified value in a string
  const name = fileName.slice(0, fileName.lastIndexOf("."));
  const truncatedName = `${name.slice(0, maxLength / 2)}...${name.slice(-maxLength / 2)}`;

  return `${truncatedName}${extension}`;
};
