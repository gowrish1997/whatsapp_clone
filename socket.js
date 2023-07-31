import io from "socket.io-client";
const connection =
  process.env.NODE_ENV === "production"
    ? "https://whatspp-server.onrender.com"
    : "http://localhost:3005";
export const socket = io.connect(connection);
