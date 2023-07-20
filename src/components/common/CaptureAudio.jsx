import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import axios from "axios";

import {
  FaPlay,
  FaTrash,
  FaStop,
  FaPause,
  FaMicrophone,
  FaPauseCircle,
} from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import { MdSend } from "react-icons/md";
import { ADD_AUDIO_MESSAGE } from "@/utils/ApiRoutes";
import { socket } from "../../../socket";

function CaptureAudio({ hide }) {
  const {
    user,
    currentChatUser,

    setMessages,
  } = useContext(UserContext);

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [waveForm, setWaveForm] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [currentPlayBackTime, setCurrentPlayBackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [renderedAUdio, setRenderedAudio] = useState(null);

  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const waveFormRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingDuration((prev) => {
          setTotalDuration(prev + 1);
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
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
    return () => waveSurfer.destroy();
  }, []);

  useEffect(() => {
    if (waveForm) {
      handleStartRecording();
    }
  }, [waveForm]);

  const handleStartRecording = () => {
    setRecordingDuration(0);
    setCurrentPlayBackTime(0);
    setTotalDuration(0);
    setRecordedAudio(null);
    setIsRecording(true);
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaStreamRef.current = stream;
        mediaRecorderRef.current = mediaRecorder;
        audioRef.current.srcObject = stream;

        const chunks = [];
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });

          const audioURL = URL.createObjectURL(blob);
          const audio = new Audio(audioURL);
          setRecordedAudio(audio);
          waveForm.load(audioURL);
        };
        mediaRecorder.start();
      })
      .catch((error) => {
        console.log("audio error", error);
      });
  };
  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
      waveForm.stop();
      const audioChunks = [];
      mediaRecorderRef.current.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });
      mediaRecorderRef.current.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
        const audioFile = new File([audioBlob], "recording.mp3");

        setRenderedAudio(audioFile);
      });
    }
  };

  useEffect(() => {
    if (recordedAudio) {
      const updatePlayBackTime = () => {
        setCurrentPlayBackTime(recordedAudio.currentTime);
      };
      recordedAudio.addEventListener("timeupdate", updatePlayBackTime);
      return () => {
        recordedAudio.removeEventListener("timeupdate", updatePlayBackTime);
      };
    }
  }, [recordedAudio]);

  const handlePlayRecording = () => {
    if (recordedAudio) {
      waveForm.stop();
      waveForm.play();

      recordedAudio.play();
      setIsPlaying(true);
    }
  };
  const handlePauseRecording = () => {
    waveForm.stop();
    recordedAudio.pause();
    setIsPlaying(false);
  };

  const sendRecording = async () => {
    try {
      const formData = new FormData();
      formData.append("audio", renderedAUdio);

      const { data, status } = await axios.post(ADD_AUDIO_MESSAGE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          from: user.id,
          to: currentChatUser.id,
        },
      });
      if (status == 201) {
        socket.emit("send-msg", {
          from: user.id,
          to: currentChatUser.id,
          message: data.message,
        });
        setMessages((prev) => [...prev, data.message]);
      }
    } catch (err) {
      console.log(err);
    }
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
    <div className="flex text-2xl w-full justify-end items-center  ">
      <div className="pt-1 ">
        <FaTrash
          className=" text-panel-header-icon cursor-pointer"
          onClick={() => hide(false)}
        />
      </div>
      <div className="mx-4 py-2 px-4 text-white text-lg flex gap-3 justify-center items-center bg-search-input-container-background rounded-full drop-shadow-lg ">
        {isRecording ? (
          <div className="text-red-500 animate-pulse w-60 text-center ">
            Recording <span>{recordingDuration} s</span>
          </div>
        ) : (
          <div>
            {recordedAudio && (
              <>
                {!isPlaying ? (
                  <FaPlay onClick={handlePlayRecording} />
                ) : (
                  <FaPause onClick={handlePauseRecording} />
                )}
              </>
            )}
          </div>
        )}
        <div className="w-60" ref={waveFormRef} hidden={isRecording} />
        {recordedAudio && isPlaying && (
          <span>{formatTime(currentPlayBackTime)}</span>
        )}
        {recordedAudio && !isPlaying && (
          <span>{formatTime(totalDuration)}</span>
        )}
        <audio ref={audioRef} hidden={true} />
      </div>
      <div className="mr-4 ">
        {!isRecording ? (
          <FaMicrophone
            className="text-red-500 "
            onClick={handleStartRecording}
          />
        ) : (
          <FaPauseCircle
            className=" text-red-500 "
            onClick={handleStopRecording}
          />
        )}
      </div>
      <div className=" ">
        <MdSend
          className=" text-panel-header-icon cursor-pointer mr-4  "
          title="send"
          onClick={sendRecording}
        />
      </div>
    </div>
  );
}

export default CaptureAudio;
