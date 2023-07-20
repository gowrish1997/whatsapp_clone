import React, { useState, useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import { host } from "@/utils/ApiRoutes";
import Avatar from "../common/Avatar";
import { FaPlay, FaStop } from "react-icons/fa";
import { calculateTime } from "@/utils/CalculateTime";
import MessageStatus from "../common/MessageStatus";

function VoiceMessage({ message }) {
  const { user, currentChatUser } = useContext(UserContext);

  const [audioMessage, setAudioMessage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentPlayBackTime, setCurrentPlayBackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [waveForm, setWaveForm] = useState(null);

  const waveFormRef = useRef(null);
  // const waveform = useRef(null);

  useEffect(() => {
    let waveSurfer;
    if (waveForm == null) {
      waveSurfer = WaveSurfer.create({
        container: waveFormRef.current,
        waveColor: "#ccc",
        progressColor: "#4a9eff",
        barWidth: 2,
        cursorColor: "#7ae3c3",
        height: 30,
        responsive: true,
      });

      setWaveForm(waveSurfer);

      waveSurfer.on("finish", () => {
        setIsPlaying(false);
      });
    }

    return () => waveSurfer.destroy();
  }, []);

  useEffect(() => {
    if (waveForm) {
      const audioURL = `${host}/${message.message}`;
      const audio = new Audio(audioURL);
      setAudioMessage(audio);

      waveForm.load(audioURL);
      waveForm.on("ready", () => {
        setTotalDuration(waveForm.getDuration());
      });
    }
  }, [message.message, waveForm]);

  useEffect(() => {
    if (audioMessage) {
      const updatePlayBackTime = () => {
        setCurrentPlayBackTime(audioMessage.currentTime);
      };
      audioMessage.addEventListener("timeupdate", updatePlayBackTime);
      return () => {
        audioMessage.removeEventListener("timeupdate", updatePlayBackTime);
      };
    }
  }, [audioMessage]);

  const handlePlayAudio = () => {
    if (audioMessage) {
      waveForm.stop();
      waveForm.play();

      audioMessage.play();
      setIsPlaying(true);
    }
  };
  const handlePauseAudio = () => {
    waveForm.stop();
    audioMessage.pause();
    setIsPlaying(false);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      className={`flex items-center gap-5 text-white px-4 pr-2 py-4 text-sm rounded-md ${
        message.senderId === currentChatUser.id
          ? " bg-incoming-background "
          : " bg-outgoing-background "
      } `}
    >
      <div>
        <Avatar type="lg" image={currentChatUser?.profilePicture} />
      </div>
      <div className=" cursor-pointer text-xl  ">
        {!isPlaying ? (
          <FaPlay onClick={handlePlayAudio} />
        ) : (
          <FaStop onClick={handlePauseAudio} />
        )}
      </div>
      <div className="relative">
        <div className="w-60" ref={waveFormRef} />
        <div className=" text-bubble-meta text-[11px] pt-1 flex justify-between absolute bottom-[-21px] w-full ">
          <span>
            {formatTime(isPlaying ? currentPlayBackTime : totalDuration)}
          </span>
          <div className="flex gap-1 ">
            <span>{calculateTime(message.createdAt)}</span>
            {message.senderId === user.id && (
              <MessageStatus messageStatus={message.messageStatus} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceMessage;
