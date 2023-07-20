import React from "react";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import { socket } from "../../../socket";
import Image from "next/image";

function IncomingCall() {
  const {
    voiceCall,
    setVoiceCall,
    endCallHandler,
    setIncomingVoiceCall,
    incomingVoiceCall,
  } = useContext(UserContext);

  const acceptCallHandler = () => {
    setVoiceCall({ ...incomingVoiceCall, type: "in-coming" });
    socket.emit("accept-incoming-call", { id: incomingVoiceCall.id });
    setIncomingVoiceCall(undefined);
  };
  const rejectCallHandler = () => {
    socket.emit("reject-voice-call", { from: incomingVoiceCall.id });
    endCallHandler();
  };

  return (
    <div className="h-24 w-80 fixed bottom-0 mb-0 right-6 z-50 rounded-sm flex gap-5 items-center justify-start bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14 ">
      <div className="">
        <Image
          src={incomingVoiceCall.profilePicture}
          alt="avatar"
          width={70}
          height={70}
          className=" rounded-ful "
        />
      </div>
      <div>
        <div>{incomingVoiceCall.name}</div>
        <div className="text-xs ">Incoming voice call</div>
        <div className="flex gap-2 mt-2 ">
          <button
            className=" bg-red-500 p-1 px-3 text-sm rounded-full "
            onClick={rejectCallHandler}
          >
            Reject
          </button>
          <button
            className=" bg-green-500 p-1 px-3 text-sm rounded-full "
            onClick={acceptCallHandler}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomingCall;
