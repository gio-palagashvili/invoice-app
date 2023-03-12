import React, { useState, useContext } from "react";
import logo from "../assets/LinkedIn_logo_initials.png";
import InputMain from "../components/invoice/bits/Inputs/InputMain";
import Hero from "../components/nav/login/Hero";
import LogninNav from "../components/nav/login/LoginNav";
import axios from "axios";
import { AppContext } from "../components/context/AppContext";

const login = () => {
  const [error, setError] = useState("");
  const { setUser } = useContext(AppContext);

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setError("");
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (data.username.length && data.password.length !== 0) {
      axios
        .post("http://localhost:5500/user/login", {
          ...data,
        })
        .then((res) => {
          localStorage.setItem("user", res.data.token);
          setUser(res.data.token);
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    } else
      setError(
        data.username.length == 0
          ? "username is required"
          : "password is required"
      );
  };

  return (
    <div className="w-[90%] h-[90vh] m-auto mt-5 flex flex-col gap-12 font-sans">
      <LogninNav image={logo} />
      <div className="flex gap-10">
        <div className="flex flex-col w-[40%]">
          <Hero />
          <div className="mt-4 md:w-[500px] lg:w-full">
            <InputMain
              h1="username"
              name="username"
              change={handleChange}
              errorMessage={
                error.includes("username") || error.includes("credential")
                  ? error
                  : ""
              }
            />
            <div className="mt-2">
              <InputMain
                h1="password"
                name="password"
                change={handleChange}
                errorMessage={error.includes("password") ? error : ""}
              />
            </div>
            <button
              className="mt-4 w-full bg-[#775EF1] p-3 rounded-md hover:bg-[#6751d4] duration-150"
              onClick={(e) => handleSubmit(e)}
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="w-[60%] hidden lg:block">todo : image here</div>
      </div>
    </div>
  );
};

export default login;
