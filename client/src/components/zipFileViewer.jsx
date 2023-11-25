// components/ZipFileViewer.js
import { useState } from 'react';

const ZipFileViewer = ({ zipFile, onSelectFiles }) => {
  const zipEntries = [
    'apple-touch-icon.png',
    'favicon-32x32.png',
    'favicon-16x16.png',
    'favicon.ico',
    'site.webmanifest',
    'android-chrome-192x192.png',
    'android-chrome-512x512.png'
  ]
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelection = (entryName) => {
    const isSelected = selectedFiles.includes(entryName);

    if (isSelected) {
      setSelectedFiles(selectedFiles.filter((file) => file !== entryName));
    } else {
      setSelectedFiles([...selectedFiles, entryName]);
    }
  };

  const handleSelectClick = () => {
    onSelectFiles(selectedFiles);
  };

  return (
    <div>
      <ul>
        {zipEntries.map((entry, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selectedFiles.includes(entry)}
              onChange={() => handleFileSelection(entry)}
            />
            {entry}
          </li>
        ))}
      </ul>
      <button onClick={handleSelectClick}>Select Files</button>
    </div>
  );
};

export default ZipFileViewer;
