import React, { useEffect, useState, useRef } from "react";
import ChatList from "./Chatlist/ChatList";
import Empty from "./Empty";
import { connectAuthEmulator, onAuthStateChanged } from "firebase/auth";
import { UserContext } from "@/pages/_app";
import { useContext } from "react";
import { useRouter } from "next/router";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { CHECK_USER } from "@/utils/ApiRoutes";
import Chat from "./Chat/Chat";
import axios from "axios";
import { GET_MESSAGES } from "@/utils/ApiRoutes";
import { socket } from "../../socket";
import SearchMessages from "./Chat/SearchMessages";
import VideoCall from "./Call/VideoCall";
import VoiceCall from "./Call/VoiceCall";
import IncomingVideoCall from "./common/IncomingVideoCall";
import IncomingCall from "./common/IncomingCall";

function Main() {
  const router = useRouter();
  const {
    user,
    setUser,
    currentChatUser,
    setMessages,
    messageSearch,
    videoCall,
    voiceCall,
    endCallHandler,
    setIncomingVoiceCall,
    setInComingVideoCall,
    setOnlineUsers,
    incomingVoiceCall,
    inComingVideoCall,
  } = useContext(UserContext);
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [socketEvent, setSocketEvent] = useState(false);

  useEffect(() => {
    if (redirectLogin) router.push("/login");
  }, [redirectLogin]);

  onAuthStateChanged(firebaseAuth, async (currentUser) => {
    if (!currentUser) setRedirectLogin(true);

    if (!user.name && currentUser?.email) {
      const res = await fetch(CHECK_USER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: currentUser.email }),
      });
      const { status, data } = await res.json();

      if (status) {
        router.push("/login");
      }

      const { id, name, email, profilePicture, about } = data;
      setUser({
        id: id,
        name: name,
        email: email,
        profilePicture: profilePicture,
        status: about,
      });
    }
  });

  useEffect(() => {
    if (user) {
      socket.emit("add-user", user.id);
    }
  }, [user]);

  useEffect(() => {
    if (!socketEvent && socket) {
      socket.on("msg-received", (data) => {
        setMessages((prev) => [...prev, data.message]);
      });

      socket.on("incoming-voice-call", ({ from, roomId, callType }) => {
        setIncomingVoiceCall({ ...from, roomId, callType });
      });

      socket.on("incoming-video-call", ({ from, roomId, callType }) => {
        console.log("incoming-video-call");
        setInComingVideoCall({ ...from, roomId, callType });
      });
      socket.on("incoming-video-call", ({ from, roomId, callType }) => {
        setInComingVideoCall({ ...from, roomId, callType });
      });
      socket.on("reject-voice-call", () => {
        endCallHandler();
      });
      socket.on("reject-video-call", () => {
        endCallHandler();
      });
      socket.on("video-call-rejected", () => {
        endCallHandler();
      });
      socket.on("voice-call-rejected", () => {
        endCallHandler();
      });
      // socket.on("accept-incoming-call", ({id}) => {
      //   endCallHandler();
      // });

      socket.on("online-users", (onlineUsers) => {
        setOnlineUsers(onlineUsers);
      });

      setSocketEvent(true);
    }
    return () => socket.off("msg-received");
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      const messages = await axios.get(
        `${GET_MESSAGES}/${user.id}/${currentChatUser.id}`
      );

      setMessages(messages.data.messages);
    };
    if (currentChatUser?.id) {
      getMessages();
    }
  }, [currentChatUser]);

  return (
    <>
      {inComingVideoCall && <IncomingVideoCall />}
      {incomingVoiceCall && <IncomingCall />}
      {videoCall && (
        <div className="h-screen w-screen max-h-full overflow-hidden ">
          <VideoCall />
        </div>
      )}
      {voiceCall && (
        <div className="h-screen w-screen max-h-full overflow-hidden ">
          <VoiceCall />
        </div>
      )}
      {!videoCall && !voiceCall && (
        <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-screen overflow-hidden ">
          <ChatList />
          {currentChatUser ? (
            <div
              className={messageSearch ? "grid grid-cols-2 " : "grid-cols-2 "}
            >
              <Chat />
              {messageSearch && <SearchMessages />}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      )}
    </>
  );
}

export default Main;
