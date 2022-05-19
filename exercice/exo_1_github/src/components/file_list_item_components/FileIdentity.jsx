import FileIcon from './FileIcon';
import FileName from './FileName';

const FileIdentity = ({ fileType, fName }) => (
  <div className='flex'>
    <FileIcon fileType={fileType} />
    <FileName fileType={fileType} fName={fName} />
  </div>
);

export default FileIdentity;
