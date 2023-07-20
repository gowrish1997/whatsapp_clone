import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import { socket } from "../../../socket";
import Image from "next/image";
import { MdOutlineCallEnd } from "react-icons/md";
import { GET_CALL_TOKEN } from "@/utils/ApiRoutes";
import axios from "axios";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";

function Container({ data }) {
  const { endCallHandler, user } = useContext(UserContext);
  const [callAccepted, setCallAccepted] = useState(false);
  const [token, setToken] = useState(undefined);
  const [zgVar, setzgVar] = useState(undefined);
  const [localStream, setLocalStream] = useState(undefined);
  const [publishStream, setPublishStream] = useState(undefined);

  const endCall = () => {
    if (zgVar && localStream && publishStream) {
      alert("end call")
      zgVar.destroyStream(localStream);
      zgVar.stopPublishingStream(publishStream);
      zgVar.logoutRoom(data.roomId.toString());
    }
    if (data.callType === "video") {
      socket.emit("reject-video-call", { from: data.id });
    } else {
      socket.emit("reject-voice-call", { from: data.id });
    }
console.log('end call handler')
    endCallHandler();
  };

  useEffect(() => {
    if (data.type == "out-going") {
      socket.on("accept-call", () => {
        setCallAccepted(true);
      });
    } else {
      setTimeout(() => {
        setCallAccepted(true);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    const getToken = async () => {
      try {
        const {
          data: { token },
        } = await axios.get(`${GET_CALL_TOKEN}/${user.id}`);

        setToken(token);
      } catch (err) {
        console.log(err);
      }
    };
    getToken();
  }, [callAccepted]);

  useEffect(() => {
    const startCall = async () => {
      if (ZegoExpressEngine) {
        // import("zego-express-engine-webrtc").then(
        //   async ({ ZegoExpressEngine }) => {

        const zg = new ZegoExpressEngine(
          930562953,
          "ed454f02f459c04d6823bd8d981528e5"
        );

        setzgVar(zg);
        zg.on(
          "roomStreamUpdate",
          async (roomID, updateType, streamList, extendedDate) => {
            if (updateType == "ADD") {
              const rmVideo = document.getElementById("remote-video");
              const vd = document.createElement(
                data.callType === "video" ? "video" : "audio"
              );
              vd.id = streamList[0].streamID;
              vd.autoplay = true;
              vd.playsInline = true;
              vd.muted = false;
              if (rmVideo) {
                rmVideo.appendChild(vd);
              }

              zg.startPlayingStream(streamList[0].streamID, {
                audio: true,
                video: true,
              }).then((stream) => {
                vd.srcObject = stream;
              });
            } else if (
              updateType == "DELETE" &&
              zg &&
              localStream &&
              streamList[0].streamID
            ) {
              zg.destroyStream(localStream);
              zg.stopPublishingStream(streamList[0].streamID);
              zg.logoutRoom(data.roomId.toString());
              endCallHandler();
            }
          }
        );
        await zg.loginRoom(
          data.roomId.toString(),
          token,
          { userID: user.id.toString(), userName: user.name },
          { userUpdate: true }
        );
        const localStream = await zg.createStream({
          camera: {
            audio: true,
            video: data.callType === "video" ? true : false,
          },
        });
        const localVideo = document.getElementById("local-video");
        const videoElement = document.createElement(
          data.callType === "video" ? "video" : "audio"
        );
        videoElement.id = "video-local-zego";
        videoElement.className = "h-28 w-32";
        videoElement.autoplay = true;
        videoElement.playsInline = true;
        videoElement.muted = false;
        localVideo.appendChild(videoElement);
        const td = document.getElementById("video-local-zego");
        td.srcObject = localStream;
        const streamID = "123" + Date.now();
        setPublishStream(streamID);
        setLocalStream(localStream);
        zg.startPublishingStream(streamID, localStream);
        //   }
        // );
      }
    };
    if (token) {
      startCall();
    }
  }, [token, ZegoExpressEngine]);

  return (
    <div className=" border-conversation-border border-l w-full bg-conversation-panel-background flex flex-col h-[100vh] overflow-hidden item-center justify-center  text-white ">
      <div className="flex flex-col gap-3 items-center ">
        <span className="text-5xl ">{data.name}</span>
        <span className="text-lg ">
          {callAccepted && data.callType !== "video"
            ? "On going call"
            : "Calling"}
        </span>
      </div>
      {(!callAccepted || data.callType === "audio") && (
        <div className="my-24">
          <Image
            src={data.profilePicture}
            alt="avatar"
            height={300}
            width={300}
            className=" rounded-full mx-auto "
          />
        </div>
      )}
      <div className="my-5 relative " id="remote-video">
        <div className="absolute bottom-5 right-5 " id="local-video"></div>
      </div>
      <div
        className="h-16 w-16 bg-red-600 flex items-center justify-center rounded-full mx-auto "
        onClick={endCall}
      >
        <MdOutlineCallEnd className="text-3xl cursor-pointer " />
      </div>
    </div>
  );
}

export default Container;
