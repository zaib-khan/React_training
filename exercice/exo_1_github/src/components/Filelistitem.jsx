import CommitMessage from './file_list_item_components/CommitMessage';
import FileIdentity from './file_list_item_components/FileIdentity';
import Time from './file_list_item_components/Time';

const FileListitem = ({ fileType, fName, date, message }) => (
  <div className="flex justify-between">
    <FileIdentity fileType={fileType} fName={fName} />
    <CommitMessage message={message} />
    <Time date={date} />
  </div>
);

export default FileListitem;
