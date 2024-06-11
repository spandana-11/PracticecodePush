import React, { useEffect, useRef, useState } from "react";
import "./SpeakerNew.css";
// import 'bootstrap/dist/css/bootstrap.css';


const Speaker = () => {
  const useref = useRef();
  const [pwrBtn, setpwrBtn] = useState(false);
  const [playBtn, setplayBtn] = useState(false);
  const [curr, setCurr] = useState(0);
  const [volume,setVolume]=useState(0.1)// State for volume control
  const songs = [
    {
      title: "song1",
      song: "audio_1.mp3",
    },
    {
      title: "song2",
      song: "audio_2.mp3",
    },
    {
      title: "song3",
      song: "audio_3.mp3",
    },
  ];
  // handle power button
  const handlepowerbtn = () => {
    setpwrBtn(!pwrBtn);
  };
  // play button functionality
  useEffect(() => {
    if (pwrBtn) {
      if (playBtn) {
        useref.current.play();
      } else {
        useref.current.pause();
      }
    } else {
      useref.current.pause();
      setplayBtn(false);
    }
  }, [pwrBtn, playBtn]);

  const handleplay = () => {
    setplayBtn(!playBtn);
  };
  // Handle next song

  const handleNext = () => {
    setCurr((prev) => (prev + 1) % songs.length);
    setplayBtn(false); // Pause when changing the song
    setTimeout(() => {
      setplayBtn(true); // Pause when changing the song
    }, 1000);
  };
  // Handle prev song

  const handleprev = () => {
    setCurr((prev) => (prev - 1) % songs.length);
    setplayBtn(false); // Pause when changing the song
    setTimeout(() => {
      setplayBtn(true); // Pause when changing the song
    }, 1000);
  };
  // Update audio element volume when volume state changes
useEffect(()=>{
  if(useref.current){

    useref.current.volume=volume
  }
},[volume])

  //increase volume
  const increaseVolume = () => {
    setVolume(prevVolume => Math.min(prevVolume + 0.1, 1));
  };
//decrease volumme
const decreaseVolume = () => {
  setVolume(prevVolume => Math.max(prevVolume - 0.1, 0));
};

  const currentadd = songs[curr];
  return (
    <div className="maindiv">
      <div class="progress">
  <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        
      {/* <div className="volume_display">
          <progress style={{height:`${volume*100 }%`}}></progress>
        </div> */}
        {/* <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
    <span class="sr-only">70% Complete</span>
  </div>
</div> */}
      <div className="display">

        <p className="note">{currentadd.title}</p>
      </div>
      <div className="speaker">
        <div className="btn_div">
          {/* <div>
            <p className="text-center">TITLE</p>
          </div> */}
          <div className="top_btn">
            <button onClick={decreaseVolume} >-{/* <i class="fa-minus"></i> */}</button>
            <button onClick={increaseVolume}>+</button>
          </div>
          <div className="mid_btn">
            <audio src={currentadd.song} ref={useref}></audio>
            <button onClick={handlepowerbtn}>{pwrBtn ? "ON" : "OFF"}</button>
            {/* <button style={buttons} onClick={handleoff}>{offBtn?"ON":"OFF"}</button> */}
          </div>
          <div className="btm_btn">
            <button onClick={handleplay}>{playBtn ? "||" : "Play"}</button>
            <button>M</button>
          </div>
        </div>
      </div>
      <div>
        <button className="next" onClick={handleNext}>
          &#8680;
        </button>

        <button className="previous" onClick={handleprev}>
          &#8678;
        </button>
      </div>
      <input
    type="range"
    className="progressBar bar"
    defaultValue="0"
    // ref={progressBar}
    // onChange={changeRange}
/>
    </div>
  );
};

export default Speaker;
