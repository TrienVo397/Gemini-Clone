import React, { useContext, useRef } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import FileUpload from '../../Utils/FileUpload.js';
import { marked } from 'marked';


const Main = () => {
  const {
    onSent,
    recentPrompts,
    setRecentPrompts,
    showResult,
    loading,
    resultData,
    input,
    setInput
  } = useContext(Context);

  const fileInputRef = useRef(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await FileUpload(file); // Gửi file lên server
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              {/* cards here */}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              <p dangerouslySetInnerHTML={{ __html: marked(resultData) }}></p>
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img onClick={() => fileInputRef.current.click()} src={assets.gallery_icon} alt="" />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may occasionally generate incorrect or misleading information...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
