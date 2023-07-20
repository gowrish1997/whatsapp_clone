import React from "react";
import { BiSearchAlt2 as Bisearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";

function SearchBar() {
  const {
    contactList,
    setFilteredContacts,
    contactFilterText,
    setContactFilterText,
  } = useContext(UserContext);

  const handleFilterCotact = (e) => {
    const filterText = e.target.value;
    const filteredContacts = contactList.filter((contact) => {
      return contact.name.toLowerCase().includes(filterText.toLowerCase());
    });
    setContactFilterText(filterText);
    setFilteredContacts(filteredContacts);
  };

  return (
    <div className=" bg-search-input-container-background flex py-3 pl-5 items-center gap-3 h-14  ">
      <div className=" bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow ">
        <div className=" ">
          <Bisearch className=" text-panel-header-icon  text-lg cursor-pointer" />
        </div>
        <div>
          <input
            type="text"
            placeholder=" Search or start a new chat"
            className="bg-transparent text-sm focus:outline-none text-white w-full "
            onChange={handleFilterCotact}
          />
        </div>
      </div>
      <div className="pr-5 pl-3  ">
        <BsFilter className=" text-panel-header-icon  text-lg cursor-pointer" />
      </div>
    </div>
  );
}

export default SearchBar;
