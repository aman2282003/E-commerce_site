import React, { useState } from 'react';
import { Button, Input, Slide } from '@chakra-ui/react'; // Import Chakra UI components
import { useToast } from '@chakra-ui/react'; // Import useToast hook
import Logo from "../../assets/logo.png";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from '../../Context/Authcontext';


export const Signup = () => {

  const { isAuth, setisAuth } = useContext(AuthContext);


  const [formData, setFormData] = useState({ email: "", password: "" });
  const toast = useToast(); // Initialize useToast hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const CustomTitle = ({ children }) => (
    <div style={{ fontSize: "30px", color: "#0071dc" }}>{children}</div>
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;


    if (email.length > 2 && password.length > 2) {
      localStorage.setItem('userData', JSON.stringify(formData));
      setFormData({ email: "", password: "" });


      toast({
        title: <CustomTitle>Account created successfully<br /> Please Login for shop</CustomTitle>,
        status: "success",
        duration: 3000, // 5 seconds
        isClosable: true,
        icon: <IoCheckmarkDoneCircle style={{ fontSize: "50px", color: "#0071dc" }} />, // Adjust the size of the icon here
        transition: Slide,
      });
      setisAuth(true)
    }
    else {
      console.log("Please enter a valid input")
    }
  };


  return (
    <div className=' flex flex-col justify-center text-center'>
      <img className="h-[70px] w-[70px] mx-auto" src={Logo} alt="Logo" />
      <p className='font-bold font-2xl m-2'>Sign in or create your account</p>
      <div className='m-2'>
        <p className='font-xl'>Not sure if you have an account?</p>
        <p className='font-xl'>Enter your email and we'll check for you.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <p className='font-bold text '>Enter Email Address</p>
        <Input className="border border-black m-1 h-[50px] w-[350px]" type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <p className='font-bold text '>Enter Password</p>
        <Input className="border border-black m-1 h-[50px] w-[350px]" type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <Button className="bg-[#0071dc] m-3 text-white p-3 rounded-full w-[300px]" type="submit">Submit</Button>
      </form>
      <div>
        <p className='font-xl'>Securing your personal information is our priority.</p>
        <p className='font-xl underline'>See our Privacy measures.</p>
      </div>
      <hr className='my-10' />
      <div className='flex gap-5 font-sm flex-wrap justify-center'>
        <p>@2024 Walmart. All Rights Reserved.</p>
        <a href="">Give feedback</a>
        <a href="">CA Privacy Rights</a>
        <a href="">Your Privacy Choices</a>
        <a href="">Notice at collection</a>
        <a href="">Request my personal Information</a>
        <a href="">California Supply Chains Act</a>
      </div>
    </div>
  );
};
