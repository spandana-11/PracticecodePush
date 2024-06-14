import React, { useEffect, useRef, useState } from "react";
import "./Remote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

export const Remote = () => {
  const[volume,setVollume]=useState(false)
  const [channels, setChannels] = useState([
    { id: "1", url: "ETV.mp4", cname: "ETV" },
    { id: "2", url: "gMusic.mp4", cname: "Gemini Music" },
    { id: "3", url: "GTV.mp4", cname: "Z TV" },
    { id: "4", url: "MAA.mp4", cname: "MAA TV" },
    { id: "5", url: "MAA.mp4", cname: "MAA TV" },
  ]);

  const [currentChannelUrl, setCurrentChannelUrl] = useState(0);
  const [power, setPower] = useState(false);
  const [audio, setAudio] = useState(0.5);

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = audio;
    }
  }, [audio]);

  const handleNext = () => {
    setCurrentChannelUrl((prevIndex) => (prevIndex + 1) % channels.length);
  };

  const handlePrev = () => {
    setCurrentChannelUrl(
      (currentIndex) => (currentIndex - 1 + channels.length) % channels.length
    );
  };

  const poweronandoff = () => {
    setPower(!power);
  };

  const volumeincrement = () => {
setVollume(true)
    setAudio((prevVolume) => Math.min(prevVolume + 0.1, 1));
setTimeout(()=>{
  setVollume(false)
},3000)
  };

  const volumedecrement = () => {
setVollume(true)

    setAudio((prevVolume) => Math.max(prevVolume - 0.1, 0));
    setTimeout(()=>{
      setVollume(false)
    },3000)
      
  };
  const handlemute=()=>{
    // alert("hello")
    setAudio(0)
  }
  const handleunmute=()=>{
    // alert("hello")
    setAudio((audio+1)*0.5);
  }

  const eachchannel = channels[currentChannelUrl];

  return (
    <div className="container">
      <div className="remotecontrol">
        <section className="powerbutton">
          <div className="power" onClick={poweronandoff}>
            <img src="powoff.png" alt="poweroffbutton" />
          </div>
{
  volume&&<div class="progress mt-1" style={{ width: "50%" }}  >
  <div
    class="progress-bar"
    value="0"
    max="100%"
    role="progressbar"
    style={{ width: `${audio * 100}%` }}
  >
    {Math.round(audio * 100)}%
  </div>
</div>
}
          
          {/* <progress  className="progress-bar" min={"0"} max={Math.round(audio*100)}></progress> */}

          <div className="mute">
           {audio===0?<FontAwesomeIcon icon={faVolumeMute} style={{color:"red"}} onClick={handleunmute}/>:
            <FontAwesomeIcon icon={faVolumeHigh} style={{color:audio===0?"red":"white"}} onClick={handlemute} />
           }
          </div>
        </section>

        {power ? (
          <div className="disTv">
            <video
              src={eachchannel.url}
              
              className="ztelugu"
              autoPlay
              ref={audioRef}
            ></video>
            <img src="./sonyTv.png" alt="tv image" width={"100%"}/>
          </div>
        ) : (
          <div className="disTv">
            <img src="./sonyTv.png" alt="tv image" width={"100%"}/>
          </div>
        )}

        <section className="homesec">
          <div className="bar">
            <img src="menu.png" width={"70%"} alt="menu" />
          </div>
          <div className="home">
            <img src="Home.png" width={"70%"} alt="home" />
          </div>
          <div className="back">
            <img src="leftarr.png" width={"70%"} alt="arrow" />
          </div>
        </section>
        <section className="volumemenu">
          <div className="channel">
            <div className="up" onClick={handleNext}>
              <img src="up-arrow.png" width={"30%"} alt="" />
            </div>
            <div className="name">ch.</div>
            <div className="down" onClick={handlePrev}>
              <img src="down-arrow.png" width={"30%"} alt="" />
            </div>
          </div>
          <div className="keyboard">
            <div className="up">
              <img src="grid.png" width={"40%"} alt="" />
            </div>
            <div className="name">Keyboard</div>
          </div>
          <div className="more">
            <div className="up">
              <img src="menuN.png" width={"40%"} alt="" />
            </div>
            <div className="name">More</div>
          </div>
          <div className="volume channel">
            <div className="up" onClick={volumeincrement}>
              <img src="up-arrow.png" width={"20%"} alt="" />
            </div>
            <div className="name">Vol.</div>
            <div className="down" onClick={volumedecrement}>
              <img src="down-arrow.png" width={"20%"} alt="" />
            </div>
          </div>
        </section>
        <section className="controllers">
          <div className="total">
            <div className="lr">
              <div className="left pad" onClick={volumedecrement}>
                <FontAwesomeIcon icon={faCaretLeft} />
              </div>
              <div className="innercircle">ok</div>
              <div className="right pad" onClick={volumeincrement}>
                {" "}
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
            </div>
            <div className="tb ">
              {/* <div className="innercircle"></div> */}

              <div className="top pad">
                <FontAwesomeIcon icon={faCaretUp} onClick={handleNext} />
              </div>
              <div className="bottom pad" onClick={handlePrev}>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
