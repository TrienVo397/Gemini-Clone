const FileUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('https://your-api.com/upload', {
      method: 'POST',
      body: formData,
      // Nếu cần: headers: { Authorization: 'Bearer your_token' }
    });

    const result = await response.json();
    console.log('Upload success:', result);
    // return result;
  } catch (error) {
    console.error('Upload failed:', error);
  }
};

export default FileUpload;
