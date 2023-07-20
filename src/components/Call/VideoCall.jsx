import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { socket } from "../../../socket";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
const Container = dynamic(() => import("@/components/Call/Container"), {
  ssr: false,
});

function VideoCall() {
  const { user, videoCall } = useContext(UserContext);
  useEffect(() => {
    if (videoCall.type == "out-going") {
      socket.emit("outgoing-video-call", {
        to: videoCall.id,
        from: {
          id: user.id,
          profilePicture: user.profilePicture,
          name: user.name,
        },
        callType: videoCall.callType,
        roomId: videoCall.roomId,
      });
    }
  }, [videoCall]);
  return <Container user={user} data={videoCall} />;
}

export default VideoCall;
