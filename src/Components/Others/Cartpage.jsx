import React from 'react'
import { Navbar } from "../Navbar"
import cartlogo from "../../assets/Cart.svg"
import { useNavigate } from 'react-router-dom'



export const Cartpage = () => {

    const name = useNavigate()


    function handleSignin() {
        name("/signup")
    }

    
    return (
        <div>
            <Navbar />
            <div className=' flex flex-col justify-center items-center text-center '>

                <p className='font-2xl font-bold m-4'>{`cart(${0} items)`}</p>
                <img style={{ height: "250px", width: "250px" }} src={cartlogo} />
                <p className='font-bold text-2xl'>Sign in to see your items.</p>

                <button onClick={handleSignin} className="bg-[#0071dc] m-4 text-white p-3 rounded-full w-[250px]">Sign in</button>

                <hr className='my-4' />
                <div>
                    <p className="font-bold text-xl">Time to start shopping!</p>
                    <p>Fill it up with savings from these popular departments.</p>
                </div>
                <div className='flex gap-5 mt-5 font-sm flex-wrap justify-center'>
                    <p>@2024 Walmart.All Rights Reserved.</p>
                    <a href="">Give feedback</a>
                    <a href="">CA Privacy Rights</a>
                    <a href="">Your Privacy Choices</a>
                    <a href="">Noice at collecetion</a>
                    <a href="">Request my personal Information</a>
                    <a href="">California Supply Chains Act</a>
                </div>

            </div>
        </div>
    )
}
