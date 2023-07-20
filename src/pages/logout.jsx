import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./_app";
import { socket } from "../../socket";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";

function logout() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    socket.emit("signout", user.id);
    setUser(undefined);
    signOut(firebaseAuth);
    router.push("/login");
  }, [socket]);
  return <div className=" bg-conversation-panel-background "></div>;
}

export default logout;
