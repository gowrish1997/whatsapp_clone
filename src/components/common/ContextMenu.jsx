import React, { useEffect, useRef } from "react";

function ContextMenu({ options, coordinates, contextMenu, setContextMenu }) {
  const contextMenuRef = useRef(null);

  useEffect(() => {
    const hadleOutsideClick = (e) => {
      if (e.target.id === "context-opener") return;

      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target)
      ) {
        setContextMenu(false);
      }
    };
    document.addEventListener("click", hadleOutsideClick);
    return () => {
      document.removeEventListener("click", hadleOutsideClick);
    };
  });

  const handleClick = (e, callback) => {
    e.stopPropagation();
    setContextMenu(false);
    callback();
  };
  return (
    <div
      className={` bg-dropdown-background fixed py-2 z-50 shadow-xl rounded-[6px] `}
      ref={contextMenuRef}
      style={{ top: coordinates.y, left: coordinates.x }}
    >
      <ul className="">
        {options.map(({ name, callback }) => (
          <li
            className="px-5 py-2 cursor-pointer hover:bg-background-default-hover "
            key={name}
            onClick={(e) => handleClick(e, callback)}
          >
            <span className="text-white ">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
