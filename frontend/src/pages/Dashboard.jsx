import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="max-w-2xl mx-auto mt-16 p-6">
      <h2 className="text-3xl font-semibold">Welcome, {user?.name}</h2>

      <p className="text-gray-600 mt-2">Your email: {user?.email}</p>

      <div className="mt-8 space-y-3">
        <Link className="btn w-full" to="/tasks">
          Go to Tasks
        </Link>

        <Link className="btn w-full" to="/profile">
          Update Profile
        </Link>

        <button className="btn bg-red-500 w-full" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
