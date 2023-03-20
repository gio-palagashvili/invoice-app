import React, { useState, useContext } from "react";
import logo from "../assets/LinkedIn_logo_initials.png";
import InputMain from "../components/invoice/bits/Inputs/InputMain";
import Hero from "../components/nav/login/Hero";
import LogninNav from "../components/nav/login/LoginNav";
import axios from "axios";
import { AppContext } from "../components/context/AppContext";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

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
      if (data.password == data.repeatPassword) {
        axios
          .post("http://localhost:5500/user/register", {
            ...data,
          })
          .then((res) => {
            navigate("/login");
          })
          .catch((err) => {
            setError(err.response.data.message);
          });
      } else {
        setError("Passwords do not match");
      }
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
      <div className="flex gap-10 flex-col lg:flex-row">
        <div className="flex w-[100%] lg:w-[50%]">
          <Hero
            a="To login into an existing account click here"
            href="/login"
            slogan="This slogan makes perfect sense."
            p="register to start usng our custom invoice app"
          />
        </div>
        <div className="w-full lg:w-[60%]">
          <div className="md:w-[500px] lg:w-full">
            <InputMain
              h1="username"
              name="username"
              change={handleChange}
              errorMessage={
                error.includes("user") || error.includes("credential")
                  ? error
                  : ""
              }
            />
            <div className="mt-2 flex gap-2 flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <InputMain
                  h1="password"
                  name="password"
                  change={handleChange}
                  errorMessage={error.includes("password") ? error : ""}
                />
              </div>
              <div className="w-full md:w-1/2">
                <InputMain
                  h1="repeat password"
                  name="repeatPassword"
                  change={handleChange}
                  errorMessage={error.includes("password") ? error : ""}
                />
              </div>
            </div>
            <button
              className="mt-4 w-full bg-[#775EF1] p-3 rounded-md hover:bg-[#6751d4] duration-150"
              onClick={(e) => handleSubmit(e)}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
