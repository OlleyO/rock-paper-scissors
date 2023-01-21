import { io, Socket } from "socket.io-client";

export let socketInstance: Socket | null;

export const initializeSocketConnection = (username: string) => {
  socketInstance = io("http://192.168.31.91:4000", {
    query: {
      username,
    },
  });

  return socketInstance;
};
