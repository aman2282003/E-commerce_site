import { useState } from "react"
import Data from "../db.json"
import { Button, Text, Box } from '@chakra-ui/react';
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import video1 from "../assets/Videos/2.mp4"
import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom"

export const Flashdeals3 = () => {
    const { isAuth } = useContext(AuthContext);

    const name = useNavigate()

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => prevIndex - 3 < 0 ? 0 : prevIndex - 3);
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => prevIndex + 3 >= Data.length ? prevIndex : prevIndex + 3);
    };

    const addToCart = (item) => {
        if (!isAuth) {
            name("/signup")
            console.log("Redirecting to signup component...");
            return;
        }
        const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        existingItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(existingItems));
    };

    function User({ user }) {
        const handleAddToCart = () => {
            addToCart(user);
        };
        return (
            <>

                <div className='m-3 p-3 w-[260px] md:w-[230px] h-[340px]'>
                    <div className='flex justify-center'>

                        <img src={user.img} alt="image" style={{ height: "100px", width: "120px" }} />
                        <CiHeart style={{ height: "30px", width: "50px", marginRight: "-40px" }} />
                    </div>

                    <p className='font-bold' style={{ marginTop: "30px" }} >{user.price}</p>
                    <p>{user.description.slice(0, 80)}</p>
                    <div className='flex justify-center m-1'>
                        <Button onClick={handleAddToCart} className='border mt-2 border-black  p-2 rounded-full'>Add to cart+</Button>
                    </div>
                </div >


            </>
        );
    }





    return (
        <>

            <div className="flex mx-[20px] my-[30px] flex-wrap">
                <div className='w-full md:w-[58%] h-[100%]'>
                    <box className="flex justify-between">
                        <Text className='mt-2 font-bold text-xl'>Get what’s going viral</Text>
                        <a className="underline">View all</a>
                    </box>
                    <Text className='mt-2 '>Find your favorite looks & more..</Text>
                    <div className='flex flex-wrap '>
                        {Data.slice(currentIndex, currentIndex + 3).map((ele) => (
                            <User user={ele} key={ele.id} />
                        ))}
                        <TfiArrowCircleLeft onClick={handlePrevClick} style={{ position: "absolute", color: "grey", marginTop: "7%", marginLeft: "-1%", height: "40px", width: "50px" }} />
                        <TfiArrowCircleRight onClick={handleNextClick} style={{ position: "absolute", color: "grey", marginTop: "7%", marginLeft: "49%", height: "40px", width: "50px" }} />
                    </div>

                </div>
                <div className="video hidden md:flex video w-[42%] ">
                    <video src={video1} className="h-[100%] hidden md:flex" autoPlay muted></video>
                </div>
            </div>


        </>



    )
}
