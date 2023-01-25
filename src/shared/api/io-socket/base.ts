import { io, Socket } from "socket.io-client";

import { API_URL } from "@/shared/config";

export let socketInstance: Socket | null;

export const initializeSocketConnection = (username: string) => {
  socketInstance = io(API_URL, {
    query: {
      username,
    },
  });

  return socketInstance;
};
