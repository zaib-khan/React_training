import FileListitem from './Filelistitem';

const FileList = ({ tab }) => (
  <div className="w-full">
    {tab.map((f) => (
      <FileListitem
        key={f.id}
        fileType={f.type}
        fName={f.name}
        message={f.latestCommit.message}
        date={f.update_at}
      />
    ))}
  </div>
);

export default FileList;

// <div>
// {
//     tab.map(f)=>{
//         <FileListitem key={f.id} fileType={f.type} fName={f.name} message={f.latestCommit.message} />
//     }
// }
// </div>
