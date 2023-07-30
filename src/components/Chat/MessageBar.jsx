import React, { useEffect, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";
import { ADD_IMAGE_MESSAGE, ADD_MESSAGES } from "@/utils/ApiRoutes";
import { FaMicrophone } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import { socket } from "../../../socket";
import PhotoPicker from "../common/PhotoPicker";
import dynamic from "next/dynamic";
const CaptureAudio = dynamic(() => import("../common/CaptureAudio"), {
  ssr: false,
});

function MessageBar() {
  const {
    user,
    currentChatUser,

    setMessages,
  } = useContext(UserContext);
  const [socketEvent, setSocketEvent] = useState(false);
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = React.createRef(null);
  const [grabPhoto, setGrabPhoto] = useState(false);
  const [showAudioRecorder, setShowAudioRecorder] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (event.target.id !== "emojiOpen") {
        if (emojiRef.current && !emojiRef.current.contains(e.target))
          setShowEmojiPicker(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  useEffect(() => {
    if (grabPhoto) {
      document.getElementById("photo-picker").click();
      document.body.onfocus = () => {
        setTimeout(() => {
          setGrabPhoto(false);
        }, 1000);
      };
    }
  }, [grabPhoto]);

  const photoPickerChange = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      const { data, status } = await axios.post(ADD_IMAGE_MESSAGE, formData, {
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

  const handleEmojiModal = (e, emojiObject) => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiObject) => {
    setMessage((message) => message + emojiObject.emoji);
  };

  const sendMessage = async () => {
    console.log("send message");
    try {
      const { data } = await axios.post(ADD_MESSAGES, {
        from: user.id,
        to: currentChatUser.id,
        message,
      });

      socket.emit("send-msg", {
        from: user.id,
        to: currentChatUser.id,
        message: data.message,
      });

      setMessages((prev) => [...prev, data.message]);
      setMessage("");
      console.log("setting show audio recorder false");
      setShowEmojiPicker(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative ">
      {!showAudioRecorder && (
        <>
          <div className="flex gap-6  ">
            <BsEmojiSmile
              className="text-panel-header-icon cursor-pointer text-xl  "
              title="Emoji "
              id="emojiOpen"
              onClick={handleEmojiModal}
            />
            {showEmojiPicker && (
              <div className="absolute bottom-24 left-16 z-50 " ref={emojiRef}>
                <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
              </div>
            )}
            <ImAttachment
              className="text-panel-header-icon cursor-pointer text-xl  "
              title="Attach file"
              onClick={() => setGrabPhoto(true)}
            />
          </div>
          <div className="w-full rounded-lg h-10 flex items-center ">
            <input
              type="text "
              placeholder="Type a message "
              className=" bg-input-background text-smm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full  "
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>

          <div className="flex w-10 items-center justify-center ">
            <button className=" ">
              {message.length ? (
                <MdSend
                  className="text-panel-header-icon cursor-pointer text-xl  "
                  title="Send message "
                  onClick={sendMessage}
                />
              ) : (
                <FaMicrophone
                  className="text-panel-header-icon cursor-pointer text-xl  "
                  title="Record "
                  onClick={() => setShowAudioRecorder(true)}
                />
              )}
            </button>
          </div>
        </>
      )}

      {grabPhoto && (
        <PhotoPicker onChange={photoPickerChange} setGrabPhoto={setGrabPhoto} />
      )}
      {showAudioRecorder && <CaptureAudio hide={setShowAudioRecorder} />}
    </div>
  );
}

export default MessageBar;
