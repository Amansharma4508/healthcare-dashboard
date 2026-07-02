

import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const LoginForm = () => {
  return (
    <div className=" flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-indigo-100 rounded-2xl shadow-lg p-8 border-2 border-white-500/100">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-sm text-gray-500">Welcome back, please login</p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Dropdown Example (optional use of icon) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <div className="relative">
              <select className="mt-1 w-full px-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>User</option>
                <option>Admin</option>
              </select>

              <ChevronDownIcon className="w-5 h-5 absolute right-3 top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;