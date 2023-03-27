import React, { useState } from 'react';
import { imageTestApi } from '../api/imageHandlingApi';

function MakeImage() {
  const [file, setFile] = useState('');
  const [content, setContent] = useState({});

  const body = {
    img: file,
    content,
  };

  const sendPostRequest = async e => {
    e.preventDefault();
    for (let i = 0; i < 10; i++) {
      const response = await imageTestApi.post('/instargram_post', body);
      console.log(response);
    }
  };

  return (
    <>
      <h1>Make Images</h1>
      <form>
        <div>
          <label htmlFor="">파일 선택 : </label>
          <input
            type="file"
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="">내용 입력 : </label>
          <input
            type="text"
            onChange={e => {
              setContent(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          onClick={sendPostRequest}
        />
      </form>
    </>
  );
}

export default MakeImage;
