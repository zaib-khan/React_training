import React from 'react';
import files from './data/files';
import FileList from './components/FileList';

const App = () => (
  <div className="py-10 max-w-7xl mx-auto">
    <main>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
            <FileList tab={files} />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
