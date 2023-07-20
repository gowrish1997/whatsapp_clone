import React, { useState } from "react";
import Avatar from "../common/Avatar";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import ContextMenu from "../common/ContextMenu";

function ChatHeader() {
  const {
    setMessagesSearch,
    currentChatUser,
    setVideoCall,
    exitChat,
    onlineUsers,
    setVoiceCall,
  } = useContext(UserContext);
  const [isContextMenu, setIsContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const contextMenuOptions = [
    {
      name: "Exit",
      callback: async () => {
        exitChat();
      },
    },
  ];

  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenu(true);
    setContextMenuPosition({ x: e.pageX - 50, y: e.pageY + 20 });
  };

  const handleVoiceCall = () => {
    setVoiceCall({
      ...currentChatUser,
      type: "out-going",
      roomId: Date.now(),
      callType: "voice",
    });
  };
  const handleVideoCall = () => {
    setVideoCall({
      ...currentChatUser,
      type: "out-going",
      roomId: Date.now(),
      callType: "video",
    });
  };
  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-50 ">
      <div className="flex items-center justify-center gap-6 ">
        <Avatar type="sm" image={currentChatUser?.profilePicture} />
        <div className="flex flex-col ">
          <span className="text-primary-strong  ">{currentChatUser?.name}</span>
          <span className="text-secondary text-sm ">
            {onlineUsers?.includes?.(currentChatUser?.id) ? "online" : "offline"}
          </span>
        </div>
      </div>
      <div className="flex gap-6 ">
        <MdCall
          className="text-panel-header-icon cursor-pointer text-xl  "
          onClick={handleVoiceCall}
        />
        <IoVideocam
          className="text-panel-header-icon cursor-pointer text-xl  "
          onClick={handleVideoCall}
        />
        <BiSearchAlt2
          className="text-panel-header-icon cursor-pointer text-xl  "
          onClick={() => setMessagesSearch(true)}
        />
        <BsThreeDotsVertical
          className="text-panel-header-icon cursor-pointer text-xl  "
          id="context-opener"
          onClick={(e) => showContextMenu(e)}
        />
        {isContextMenu && (
          <ContextMenu
            options={contextMenuOptions}
            coordinates={contextMenuPosition}
            contextMenu={isContextMenu}
            setContextMenu={setIsContextMenu}
          />
        )}
      </div>
    </div>
  );
}

export default ChatHeader;
