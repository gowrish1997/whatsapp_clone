import React, { useEffect } from "react";
import Avatar from "../common/Avatar";
import { UserContext } from "@/pages/_app";
import { useContext } from "react";
import { calculateTime } from "@/utils/CalculateTime";
import MessageStatus from "../common/MessageStatus";
import { FaMicrophone, FaCamera } from "react-icons/fa";
import { socket } from "../../../socket";

function ChatLIstItem({ data, isContactPage = false }) {
  const {
    user,
    currentChatUser,
    contactList,
    setMessages,
    messages,
    setContactList,
    setCurrentChatUser,
    setContactPage,
  } = useContext(UserContext);

  const updateContactListhandler = () => {
    const updatedContactList = contactList?.map((contact) => {
      if (contact.id === data.id) {
        return {
          ...contact,
          totalUnreadMessages: 0,
        };
      }
      return contact;
    });
    setContactList(updatedContactList);
  };

  const handleContactClick = () => {
    if (isContactPage) {
      setCurrentChatUser({
        name: data.name,
        about: data.about,
        profilePicture: data.profilePicture,
        email: data.email,
        id: data.id,
      });
      updateContactListhandler();
      setContactPage(false);
      socket.emit("update-msg", data?.id);
    } else {
      setCurrentChatUser(data);
      setContactPage(false);
      updateContactListhandler();
      socket.emit("update-msg", data?.id);
    }
  };
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <div
      className={`flex cursor-pointer items-center hover:bg-background-default-hover  `}
      onClick={handleContactClick}
    >
      <div className="min-w-fit px-5 pt-3 pb-1 ">
        <Avatar type="lg" image={data?.profilePicture} />
      </div>
      <div className="min-h-full flex flex-col justify-center mt-3 pr-2 w-full  ">
        <div className="flex justify-between ">
          <div>
            <span className="text-white ">{data.name}</span>
          </div>
          {!isContactPage && (
            <div className=" ">
              <span
                className={`${
                  !data.totalUnreadMessages > 0
                    ? "text-secondary"
                    : " text-icon-green "
                } text-sm `}
              >
                {calculateTime(data.createdAt)}
              </span>
            </div>
          )}
        </div>
        <div className="flex border-b border-conversation-border pb-2 pt-1 pr-2 ">
          <div className="flex justify-between w-full text-secondary ">
            <div className="flex justify-start gap-2 ">
              {isContactPage ? (
                <span className=" text-secondary line-clamp-1 text-sm ">
                  {data?.about || "\u00a0"}
                </span>
              ) : (
                <div className="flex items-center gap-1 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[200px] xl:max-w-[300px] ">
                  {data.senderId == user.id && (
                    <MessageStatus messageStatus={data.messageStatus} />
                  )}
                </div>
              )}
              {data.type == "text" && (
                <span className=" truncate ">{data.message}</span>
              )}
              {data.type == "audio" && (
                <span className="flex gap-1 items-center ">
                  <FaMicrophone className=" text-panel-header-icon " />
                  Audio
                </span>
              )}
              {data.type == "image" && (
                <span className="flex gap-1 items-center ">
                  <FaCamera className=" text-panel-header-icon " />
                  Image
                </span>
              )}
            </div>
            {data.totalUnreadMessages > 0 && (
              <span className=" bg-icon-green w-[20px] h-[20px] rounded-full text-center text-sm text-black ">
                {data.totalUnreadMessages}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatLIstItem;
