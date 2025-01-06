import { Server } from "socket.io";
const env = "production";
const io = new Server({
  cors: {
    origin:
      env === "dev"
        ? "http://localhost:5173"
        : "https://real-estate-app-beta-six.vercel.app",
  },
});

let onlineUser = [];

function addUser(userId, socketId) {
  const userExists = onlineUser.find((user) => user.userId === userId);
  if (!userExists) {
    onlineUser.push({ userId, socketId });
  }
}

function removeUser(socketId) {
  try {
    onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
  } catch (error) {
    console.log(error);
  }
}

function getUser(userId) {
  return onlineUser.find((user) => user.userId === userId);
}

io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);

    io.to(receiver?.socketId).emit("getMessage", data);
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen(process.env.PORT);
