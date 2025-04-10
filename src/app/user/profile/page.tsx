"use client";
import { useAuth } from "@/context/AuthProvider";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const { user } = useAuth();
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/user");
      const user = await res.json();
      setFormData(user);
    };

    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success("Profile updated!");
    } else {
      toast.error("Update failed!");
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-base-100 shadow-xl rounded-xl mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <img
          src={formData.profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <input
          type="text"
          name="profileImage"
          value={formData.profileImage}
          onChange={handleChange}
          placeholder="Profile Image URL"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="input input-bordered w-full"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact"
          className="input input-bordered w-full"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          Update Profile
        </button>
      </form>
    </div>
  );
}
