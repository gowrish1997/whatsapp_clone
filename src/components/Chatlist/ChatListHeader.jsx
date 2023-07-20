import React, { useState } from "react";
import Image from "next/image";
import Avatar from "../common/Avatar";
import { UserContext } from "@/pages/_app";
import { useContext } from "react";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/router";
import ContextMenu from "../common/ContextMenu";

function ChatListHeader() {
  const router = useRouter();
  const userInfo = useContext(UserContext);
  const { user, newUser, contactPage, setContactPage } =
    useContext(UserContext);
  const handleAllContaPage = () => {
    setContactPage(!contactPage);
  };
  const [isContextMenu, setIsContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const contextMenuOptions = [
    {
      name: "Logout",
      callback: async () => {
        setIsContextMenu(false);
        router.push("/logout");
      },
    },
  ];

  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenu(true);
    setContextMenuPosition({ x: e.pageX, y: e.pageY});
  };

  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center  ">
      <div className=" cursor-pointer ">
        <Avatar type="sm" image={user.profilePicture}></Avatar>
      </div>
      <div className=" flex gap-6  ">
        <BsFillChatLeftTextFill
          className=" text-panel-header-icon cursor-pointer text-xl "
          title="New Chat"
          onClick={handleAllContaPage}
        />
        <>
          <BsThreeDotsVertical
            className=" text-panel-header-icon cursor-pointer text-xl "
            title="Menu"
            onClick={(e) => showContextMenu(e)}
            id="context-opener"
          />
          {isContextMenu && (
            <ContextMenu
              options={contextMenuOptions}
              coordinates={contextMenuPosition}
              contextMenu={isContextMenu}
              setContextMenu={setIsContextMenu}
            />
          )}
        </>
      </div>
    </div>
  );
}

export default ChatListHeader;
