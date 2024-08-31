import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget.jsx";
import apiRequest from "../../lib/apiRequest";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState([]);

  const handleAvatarChange = (newAvatar) => {
    setAvatar(newAvatar);
  };
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const { username, email, password } = event.target;
    const data = {
      username: username.value,
      email: email.value,
      password: password.value,
      avatar: avatar[0],
    };
    try {
      const res = await apiRequest.put(`/user/${currentUser.id}`, data);
      // const {password:securePassword,...secureRes} = res.data;
      // console.log(secureRes);
      console.log(res.data);
      updateUser(res.data);
      navigate("/profile");
    } catch (error) {
      console.log(error)
      setError(error);
      // res.status(400).json(error);
    }
  }
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>{error.response.data.message}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0]|| currentUser.avatar || "/blank.webp"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "thakurAditya",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 20000000,
            folders: "avatars",
          }}
          setState={handleAvatarChange}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
