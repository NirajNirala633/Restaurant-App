import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from '../redux/userSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  // console.log(fullName, email, password)
  const isLoading = useSelector(store=>store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    // console.log(fullName, email, password);
    dispatch(setLoading(true));
    if (isLogin) {
      // login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user,{
          headers:{
              'Content-Type':'application/json'
          },
          // withCredentials:true
      });
        // console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        toast.error(error.response?.data?.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      // Register
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      // console.log(user)
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user);
        // console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response?.data?.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
          alt="netflix-background"
        />
      </div>
      <form
        onSubmit={getInputData}
        className="flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-90"
      >
        <h1 className=" text-3xl mb-5 text-white font-bold">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="FullName"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <button type="submit" className="bg-red-800 mt-6 p-3 text-white rounded-sm font-medium">
            {`${isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}`}
          </button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflix?" : "Already have an Account"}
            <span
              onClick={loginHandler}
              className="ml-1 text-blue-900 font-medium cursor-pointer"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
