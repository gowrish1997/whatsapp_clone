import React, { useEffect } from "react";
import Image from "next/image";
import { useContext, useState } from "react";
import { UserContext } from "./_app";
import Input from "@/components/common/Input";
import Avatar from "@/components/common/Avatar";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
function Onboarding() {
  const router = useRouter();
  const { user, setUser, newUser, setNewUser } = useContext(UserContext);
  const [name, setName] = useState(user.name || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png");
  useEffect(() => {
    if (!user.email || !newUser) {
      router.push("/login");
    } else if (!newUser && user.email) {
      router.push("/");
    }
  }, [user, router, newUser]);
  const validate = () => {
    if (name.length < 3) {
      return false;
    }

    return true;
  };
  [];

  const onBoardUserHandler = async () => {
    if (validate()) {
      const email = user.email;
      try {
        console.log(email, name, about, image);
        const res = await fetch(ONBOARD_USER_ROUTE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, about, image, email }),
        });
        const data = await res.json();
        console.log(data);
        if (data.status) {
          setUser({
            ...user,
            name,
            email,
            status: about,
            profilePicture: image,
          });
          setNewUser(false);
        }
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className=" bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center gap-2 ">
        <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <h2 className="text-2xl">Create your profile</h2>

      <div className="flex gap-6 mt-5  ">
        <div className="flex flex-col items-center justify-center mt-5 gap-6 ">
          <Input name="Display name " state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
          <div className="flex justify-center items-center ">
            <button
              className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg"
              onClick={onBoardUserHandler}
            >
              Create profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type="xl" image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
