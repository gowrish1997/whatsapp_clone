import React, { useEffect, useState } from "react";
import { GET_ALL_CONTACTS } from "@/utils/ApiRoutes";
import { BiArrowBack } from "react-icons/bi";
import { UserContext } from "@/pages/_app";
import { useContext } from "react";
import { BiSearchAlt2 as Bisearch } from "react-icons/bi";
import ChatLIstItem from "./ChatLIstItem";

function ContactsList() {
  const { contactPage, setContactPage } = useContext(UserContext);
  const [contactFilterText, setContactFilterText] = useState("");
  const [allContacts, setAllContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const res = await fetch(GET_ALL_CONTACTS, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setAllContacts(data.user);
        setFilteredContacts(data.user);
      } catch (err) {
        console.log(err);
      }
    };
    getContacts();
  }, []);

  useEffect(() => {
    const filteredContacts = Object.entries(allContacts).filter(
      ([key, value]) => {
        const filter = value.filter((item) => {
          return item.name
            .toLowerCase()
            .includes(contactFilterText.toLowerCase());
        });

        if (filter.length > 0) {
          return true;
        } else {
          return false;
        }
      }
    );

    setFilteredContacts(Object.fromEntries(filteredContacts));
  }, [contactFilterText]);

  return (
    <div className="h-full flex flex-col ">
      <div className="h-24 flex items-end px-3 py-4 ">
        <div className="flex items-center gap-12 text-white ">
          <BiArrowBack
            className=" cursor-pointer text-xl  "
            onClick={() => setContactPage(!contactPage)}
          />
          <span> New chat</span>
        </div>
      </div>
      <div className=" bg-search-input-container-background h-full flex-auto overflow-auto custom-scrollbar  ">
        <div className="flex py-3 items-center gap-3 h-14 ">
          <div className=" bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow mx-4 ">
            <div className=" ">
              <Bisearch className=" text-panel-header-icon  text-lg cursor-pointer" />
            </div>
            <div>
              <input
                type="text"
                placeholder=" Search Contacts"
                className="bg-transparent text-sm focus:outline-none text-white w-full "
                onChange={(e) => setContactFilterText(e.target.value)}
              />
            </div>
          </div>
        </div>
        {Object.entries(filteredContacts).map(([key, value]) => {
          return (
            <div key={Date.now() + key} className=" mx-4">
              <div className=" text-teal-light py-5">{key}</div>
              {value.map((item) => {
                return (
                  <ChatLIstItem
                    data={item}
                    isContactPage={true}
                    key={item.id}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactsList;
