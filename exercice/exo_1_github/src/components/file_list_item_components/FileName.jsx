const FileName = ({ fName, fileType }) => {
  let temp = fName;
  if (fileType === 'file') {
    temp = `.${temp}`;
  }
  return temp;
};

export default FileName;
