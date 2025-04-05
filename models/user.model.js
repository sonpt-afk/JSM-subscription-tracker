import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "username is required"],
      trim: true,
      minLength: 2,
      maxLength: 20,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: 8,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

User.create({});
