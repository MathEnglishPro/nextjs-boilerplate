"use client";

import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState("login");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    alert(`Login: ${username}`);
  }

  function handleSignup() {
    alert(`Signup: ${username}`);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-600">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
        
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Chat App
        </h1>

        <div className="flex justify-center gap-4 mb-4">
          <button onClick={() => setMode("login")}>
            Login
          </button>
          <button onClick={() => setMode("signup")}>
            Sign Up
          </button>
        </div>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {mode === "login" ? (
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleSignup}
            className="w-full bg-green-600 text-white p-2 rounded"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
}
