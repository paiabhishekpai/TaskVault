import React, { useContext, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");

  const saveProfile = async () => {
    try {
      const res = await api.put("/user/update", { name, bio });
      setUser(res.data);
      alert("Profile updated");
    } catch (err) {
      alert("Could not update profile");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border rounded shadow">
      <h2 className="text-2xl mb-4 font-semibold">Update Profile</h2>

      <div className="space-y-3">
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />

        <textarea
          className="input"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />

        <button className="btn w-full" onClick={saveProfile}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
