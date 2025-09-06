import React, { useState } from "react";
import { registerUser } from "../api";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await registerUser(form);
    if (data.error) setMessage(data.error);
    else setMessage("Registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Signup</h2>
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}
