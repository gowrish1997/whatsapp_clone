import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import { IoClose } from "react-icons/io5";
import { BiSearchAlt2 as Bisearch } from "react-icons/bi";
import { calculateTime } from "@/utils/CalculateTime";

function SearchMessages() {
  const { messageSearch, setMessagesSearch, currentChatUser, messages } =
    useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [searchedMessages, setSearchedMessages] = useState([]);

  useEffect(() => {
    if (searchText) {
      const searchedMessages = messages.filter(
        (message) =>
          message.type == "text" &&
          message.message.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchedMessages(searchedMessages);
    } else {
      setSearchedMessages([]);
    }
  }, [searchText]);

  return (
    <div className=" border-conversation-border border-l w-full bg-conversation-panel-background flex flex-col z-10 max-h-screen  ">
      <div className="h-16 px-4 py-5 flex gap-10 item-center bg-panel-header-background text-primary-strong ">
        <IoClose
          className=" cursor-pointer text-icon-lighter text-2xl  "
          onClick={() => setMessagesSearch(false)}
        />
        <span>Search messages</span>
      </div>
      <div className="overflow-auto custom-scrollbar h-full ">
        <div className="flex items-center flex-col w-full  ">
          <div className="flex px-5 items-center gap-3 h-14 w-full ">
            <div className=" bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow ">
              <div className=" ">
                <Bisearch className=" text-panel-header-icon  text-lg cursor-pointer" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" Search messages"
                  className="bg-transparent text-sm focus:outline-none text-white w-full "
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
              </div>
            </div>
          </div>
          <span className="mt-10 text-secondary ">
            {!searchText.length &&
              `Search for messages with ${currentChatUser.name} `}
          </span>
        </div>
        <div className="flex justify-center h-full flex-col ">
          {searchText.length > 0 && !searchedMessages.length && (
            <span className=" text-secondary w-full flex justify-center ">
              No messages found
            </span>
          )}
          <div className="flex flex-col w-full h-full ">
            {searchedMessages.map((message) => {
              return (
                <div className="flex cursor-pointer flex-col justify-center hover:bg-background-default-hover w-full px-5 border-b-[0.1px] border-secondary py-5  ">
                  <div className="text-sm text-secondary ">
                    {calculateTime(message.createdAt)}
                  </div>
                  <div className="text-icon-green ">{message.message}</div>
                </div>
              );
            }, [])}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMessages;
