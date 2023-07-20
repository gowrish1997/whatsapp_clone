import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import { GET_INITIAL_CONTACTS } from "@/utils/ApiRoutes";
import ChatLIstItem from "./ChatLIstItem";
import axios from "axios";

function List() {
  const {
    user,
    contactList,
    setContactList,
    filteredContacts,
    setOnlineUsers,
    contactFilterText,
  } = useContext(UserContext);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const {
          data: { contactList, onlineUsers },
          status,
        } = await axios.get(`${GET_INITIAL_CONTACTS}/${user.id}`);

        setOnlineUsers(onlineUsers);
        setContactList(contactList);
      } catch (error) {
        console.log(error);
      }
    };
    if (user.id) {
      getContacts();
    }
  }, [user]);

  return (
    <div className=" bg-search-input-container-background flex-auto overflow-auto max-h-full custom-scrollbar ">
      {filteredContacts.length > 0 || contactFilterText.length > 0
        ? filteredContacts.map((contact) => {
            return <ChatLIstItem key={contact.id} data={contact} />;
          })
        : contactList.map((contact) => {
            return <ChatLIstItem key={contact.id} data={contact} />;
          })}
    </div>
  );
}

export default List;
