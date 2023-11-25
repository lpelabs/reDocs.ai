import { useState } from 'react';
import axios from 'axios';

const FileUploadForm = ({ onFileUpload }) => {
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); // Handle the API response as needed
      onFileUpload(selectedFile, response.data.entries);
    } catch (error) {
      console.error('File upload error:', error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUploadForm;
