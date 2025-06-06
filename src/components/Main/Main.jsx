import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import {Context} from '../../context/Context'
import {marked}  from 'marked'
const Main = () => {
  const ctx = useContext(Context);
console.log('Context value:', ctx);


  const{onSent,
     recentPrompt, 
     setrecentPrompt, 
     showResult, 
     loading, 
     resultData, 
     input, 
     setInput} = useContext(Context)
     
console.log('Recent prompt:', recentPrompt);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult ?<>
                <div className="greet">
          <p><span>Hello, Dev</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve readability of this code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div></>: <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {/* loading as result is being generated */}
            {loading?
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> :
             <p dangerouslySetInnerHTML={{__html:marked(resultData)}}></p>

            }
          </div>
        </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            {/* input field */}
            <input onKeyDown={(e) =>{
              if(e.key === "Enter")
                onSent();
            }} onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' /> 

     
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may occasionally generate incorrect or misleading information and should not be seen as a perfectly reliable source.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
