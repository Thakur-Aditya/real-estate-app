import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
// import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
// app.use(cors({ orign: "http://localhost:5173/", credentials: true })); //Credentials for sending cookies
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/user", userRoute);

app.listen(8800, () => {
  console.log("Example app listening on port 8800!");
});
