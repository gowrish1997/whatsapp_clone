import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FcCamera } from "react-icons/fc";
import ContextMenu from "./ContextMenu";
import PhotoPicker from "./PhotoPicker";
import PhotoLibrary from "./PhotoLibrary";
import CapturePhoto from "./CapturePhoto";

function Avatar({ type, image, setImage }) {
  const [hover, setHover] = useState(false);
  const [isContextMenu, setIsContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [photoLibrary, setPhotoLibrary] = useState(false);
  const [grabPhoto, setGrabPhoto] = useState(false);
  const [showCapture, setShowCapture] = useState(false);
  useEffect(() => {
    if (grabPhoto) {
      document.getElementById("photo-picker").click();
      document.body.onfocus = () => {
        setTimeout(() => {
          setGrabPhoto(false);
        }, 1000);
      };
    }
  }, [grabPhoto]);

  const contextMenuOptions = [
    {
      name: "Take photo",
      callback: () => {
        setShowCapture(true);
      },
    },
    {
      name: "Chose from gallery",
      callback: () => {
        setPhotoLibrary(true);
      },
    },
    {
      name: "Upload photo",
      callback: () => {
        setGrabPhoto(true);
      },
    },
    {
      name: "remove photo",
      callback: () => {
        setImage("/default_avatar.png");
      },
    },
  ];

  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenu(true);
    setContextMenuPosition({ x: e.pageX, y: e.pageY });
  };
  const photoPickerChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const data = document.createElement("img");
    reader.onload = function (event) {
      data.src = event.target.result;
      data.setAttribute("data-src", event.target.result);
    };
    reader.readAsDataURL(file);
    setTimeout(() => {
      setImage(data.src);
    }, 100);
    setImage(image);
  };

  return (
    <>
      <div className="  flex items-center justify-center">
        {type === "sm" && (
          <div className="relative h-10 w-10  ">
            <Image src={image} fill alt="avatar" className="rounded-full" />
          </div>
        )}
        {type === "lg" && (
          <div className="relative h-14 w-14  ">
            <Image src={image} fill alt="avatar" className="rounded-full" />
          </div>
        )}
        {type === "xl" && (
          <div
            className="relative z-0  cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div
              className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 ${
                hover ? "visible " : "hidden"
              } `}
              onClick={(e) => showContextMenu(e)}
              id="context-opener"
            >
              <FcCamera
                className="text-2xl text-white "
                onClick={(e) => showContextMenu(e)}
                id="context-opener"
              />
              <span onClick={(e) => showContextMenu(e)} id="context-opener">
                change
                <br />
                profile
                <br />
                photo
              </span>
            </div>
            <div className="flex h-60 w-60 ">
              <Image src={image} fill alt="avatar" className="rounded-full" />
            </div>
          </div>
        )}
      </div>
      {isContextMenu && (
        <ContextMenu
          options={contextMenuOptions}
          coordinates={contextMenuPosition}
          contextMenu={isContextMenu}
          setContextMenu={setIsContextMenu}
        />
      )}
      {photoLibrary && (
        <PhotoLibrary setImage={setImage} setPhotoLibrary={setPhotoLibrary} />
      )}
      {grabPhoto && (
        <PhotoPicker onChange={photoPickerChange} setGrabPhoto={setGrabPhoto} />
      )}
      {showCapture && (
        <CapturePhoto setImage={setImage} hide={setShowCapture} />
      )}
    </>
  );
}

export default Avatar;
