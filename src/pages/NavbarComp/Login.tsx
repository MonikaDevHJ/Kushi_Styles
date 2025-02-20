import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center text-fuchsia-700 mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full bg-fuchsia-700 text-white py-2 rounded-md hover:bg-fuchsia-600 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
