import "@/styles/globals.css";
import Head from "next/head";
import { createContext, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
export const UserContext = createContext();

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({});
  const [newUser, setNewUser] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [currentChatUser, setCurrentChatUser] = useState(undefined);
  const [messages, setMessages] = useState([]);
  const [messageSearch, setMessagesSearch] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [contactFilterText, setContactFilterText] = useState("");
  const [videoCall, setVideoCall] = useState(undefined);
  const [voiceCall, setVoiceCall] = useState(undefined);
 
  const [incomingVoiceCall, setIncomingVoiceCall] = useState(undefined);
  const [inComingVideoCall, setInComingVideoCall] = useState(undefined);
  const endCallHandler = () => {
    setVideoCall(undefined);
    setVoiceCall(undefined);
    setIncomingVoiceCall(undefined);
    setInComingVideoCall(undefined);
  };

  const exitChat = () => {
    setCurrentChatUser(undefined);
  };

  return (
    <GoogleOAuthProvider clientId="680904253702-8an5s18u7f7iep5kdvuqcdkgvkr89tli.apps.googleusercontent.com">
      <UserContext.Provider
        value={{
          user,
          setUser,
          newUser,
          setNewUser,
          contactPage,
          setContactPage,
          currentChatUser,
          setCurrentChatUser,
          messages,
          setMessages,
          messageSearch,
          setMessagesSearch,
          contactList,
          setContactList,
          onlineUsers,
          setOnlineUsers,
          filteredContacts,
          setFilteredContacts,
          contactFilterText,
          setContactFilterText,
          videoCall,
          setVideoCall,
          voiceCall,
          setVoiceCall,
          endCallHandler,
          incomingVoiceCall,
          setIncomingVoiceCall,
          inComingVideoCall,
          setInComingVideoCall,
          exitChat,
        }}
      >
        <Head>
          <title>Whatsapp</title>

          <link rel="icon" href="/favicon.png" />
        </Head>

        <Component {...pageProps} />
      </UserContext.Provider>
    </GoogleOAuthProvider>
  );
}
