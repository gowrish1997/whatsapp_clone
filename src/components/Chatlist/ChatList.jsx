import React, { useEffect, useState } from "react";
import ChatListHeader from "./ChatListHeader";
import List from "./List";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import ContactsList from "./ContactsList";

function ChatList() {
  const { user, newUser, contactPage, setContactPage } =
    useContext(UserContext);
  const [pageType, setPageType] = useState("default");
  useEffect(() => {
    if (contactPage) {
      setPageType("all-contacts");
    } else {
      setPageType("default");
    }
  }, [contactPage]);

  return (
    <div className=" bg-panel-header-background flex flex-col max-h-screen z-20 ">
      {pageType === "all-contacts" ? (
        <ContactsList />
      ) : (
        <>
          <ChatListHeader />
          <SearchBar />
          <List />
        </>
      )}
    </div>
  );
}

export default ChatList;
