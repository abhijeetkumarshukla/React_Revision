import { useState } from "react";
import axios from "axios";

const SignWithAPI = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // For loading state
  const [message, setMessage] = useState(""); // For success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setMessage("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const URL = "http://localhost:5000/user/register";
      const response = await axios.post(URL, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      // Handle response success
      if (response.status === 200) {
        setMessage("Signup successful!");
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      } else {
        setMessage("Signup failed. Please try again.");
      }
    } catch (error) {
      // Handle error response
      setMessage(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignWithAPI;
