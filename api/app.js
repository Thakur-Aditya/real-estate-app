import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
// app.use(cors({ origin: "http://localhost:5173/api", credentials: true })); //Credentials for sending cookies
app.use(
  cors({
    origin: "https://real-estate-app-beta-six.vercel.app", // Allows all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
); //Credentials for sending cookies
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/user", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port 8800!");
});
