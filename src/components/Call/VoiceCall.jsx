import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { socket } from "../../../socket";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
const Container = dynamic(() => import("@/components/Call/Container"), {
  ssr: false,
});

function VoiceCall() {
  const { user, voiceCall } = useContext(UserContext);

  useEffect(() => {
    if (voiceCall.type == "out-going") {
      socket.emit("outgoing-voice-call", {
        to: voiceCall.id,
        from: {
          id: user.id,
          profilePicture: user.profilePicture,
          name: user.name,
        },
        callType: voiceCall.callType,
        roomId: voiceCall.roomId,
      });
    }
  }, [voiceCall]);

  return <Container user={user} data={voiceCall} />;
}

export default VoiceCall;
