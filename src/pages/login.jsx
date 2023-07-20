import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { CHECK_USER } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { UserContext } from "./_app";

function login() {
  const { user, setUser, newUser, setNewUser } = useContext(UserContext);

  useEffect(() => {
    if (user?.id && !newUser) {
      router.push("/");
    }
  }, [user, newUser]);
  const router = useRouter();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoUrl: profilePicture },
    } = await signInWithPopup(firebaseAuth, provider);

    try {
      if (email) {
        const res = await fetch(CHECK_USER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        const { status, data } = await res.json();
        console.log(status);
        if (!status) {
          setNewUser(true);
          setUser({ name, email, profilePicture, status: "" });
          router.push("/onboarding");
        } else {
          setUser({
            id: data.id,
            name: data.name,
            email: data.email,
            profilePicture: data.profilePicture,
            status: data.about,
          });
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center  bg-panel-header-background h-screen w-screen flex-col gap-6 ">
      <div className="flex items-center justify-center gap-2 text-white  ">
        <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <button
        className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg "
        onClick={handleLogin}
      >
        <FcGoogle className="text-4xl" />
        <span className="text-white text-2xl  ">Login with google</span>
      </button>
    </div>
  );
}

export default login;
