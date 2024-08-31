import { useNavigate, Link, useLoaderData, Await } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import { Suspense } from "react";
import List from "../../components/list/List";
import "./profilePage.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function ProfilePage() {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);
  const data = useLoaderData();

  // useEffect(() => {
  //   // if (!currentUser) {
  //   //   navigate("/login");
  //   // }

  //   async function verifyUser() {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:8800/api/auth/verify-token",
  //         {},
  //         { withCredentials: true }
  //       );
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error.response);
  //       navigate("/login");
  //     }
  //   }

  //   verifyUser();
  // }, []);

  const handleLogour = async () => {
    try {
      await apiRequest.post("/auth/logout");

      // await axios.post(
      //   "http://localhost:8800/api/auth/logout",
      //   {},
      //   { withCredentials: true }
      // );
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    // window.location.href = "/login";
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "/blank.webp"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogour}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
          {/* <List /> */}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading Chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
