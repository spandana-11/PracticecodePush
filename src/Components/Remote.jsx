import React, { useEffect, useRef, useState } from "react";
import "./Remote.css";

export const Remote = () => {
  const [channels, setChannels] = useState([
    { id: "1", url: "ETV.mp4", cname: "ETV" },
    { id: "2", url: "gMusic.mp4", cname: "Gemini Music" },
    { id: "3", url: "GTV.mp4", cname: "Z TV" },
    { id: "4", url: "MAA.mp4", cname: "MAA TV" },
    { id: "5", url: "MAA.mp4", cname: "MAA TV" }
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
    setCurrentChannelUrl((currentIndex) => (currentIndex - 1 + channels.length) % channels.length);
  };

  const poweronandoff = () => {
    setPower(!power);
  };

  const volumeincrement = () => {
    setAudio((prevVolume) => Math.min(prevVolume + 0.1, 1));
  };

  const volumedecrement = () => {
    setAudio((prevVolume) => Math.max(prevVolume - 0.1, 0));
  };

  const eachchannel = channels[currentChannelUrl];

  return (
    <div className="container">
      <div className="remotecontrol">
        <section className="powerbutton">
          <div className="power" onClick={poweronandoff}>
            <img src="powoff.png" alt="poweroffbutton" />
          </div>
          <div className="mute">
            <img src="mutewhite.png" alt="muteicon" />
          </div>
        </section>

        {power ? (
          <div className="disTv">
            <video
              src={eachchannel.url}
              controls
              className="ztelugu"
              autoPlay
              ref={audioRef}
            ></video>
            <img src="./sonyTv.png" alt="tv image" width={"100%"} />
          </div>
        ) : (
          <div className="disTv">
            <img src="./sonyTv.png" alt="tv image" width={"100%"} />
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
          <div className="lr">
            <div className="left">+</div>
            <div className="ok">ok</div>
            <div className="right">-</div>
          </div>
          {/* <div className="tb">
            <div className="top">+</div>
            <div className="bottom">-</div>
          </div> */}
        </section>
      </div>
    </div>
  );
};
