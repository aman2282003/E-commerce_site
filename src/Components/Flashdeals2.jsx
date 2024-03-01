import { useState } from "react"
import Data from "../db.json"
import { Button, GridItem } from '@chakra-ui/react';
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import GrassImage from "../assets/Grass.webp"
import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom"


export const Flashdeals2 = () => {
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
                </div>


            </>
        );
    }





    return (
        <>

            <div className="flex mx-[20px] my-[30px] flex-wrap">
                <div className='w-full md:w-[60%] h-[100%]'>
                    <div className='flex justify-between px-3' >
                        <p className='font-bold text-xl'>Express Yourself</p>
                        <p className="px-10 underline">View All</p>
                    </div>
                    <p className='mt-2 px-3'>Fab fashion for every fest.</p>
                    <div className='flex flex-wrap p-3'>
                        {Data.slice(currentIndex, currentIndex + 3).map((ele) => (
                            <User user={ele} key={ele.id} />
                        ))}
                        <TfiArrowCircleLeft onClick={handlePrevClick} style={{ position: "absolute", color: "grey", marginTop: "7%", marginLeft: "-1%", height: "40px", width: "50px" }} />
                        <TfiArrowCircleRight onClick={handleNextClick} style={{ position: "absolute", color: "grey", marginTop: "7%", marginLeft: "48%", height: "40px", width: "50px" }} />
                    </div>

                </div>
                <div className="hidden md:flex video w-[40%] ">
                    <GridItem className="h-[90%] w-[100%]" borderRadius={15} bgImage={`url(${GrassImage})`}
                        backgroundSize="cover" backgroundPosition="center">
                        <p className='font-bold p-3 text-xl text-white'>Concert-ready outfits</p>
                        <p className='font-bold p-3 text-5xl text-white'>The Festival <br />Shop</p>
                        <Button className=' m-10  p-3 w-40 border font-bold border-black bg-white rounded-full'>Shop now</Button>
                    </GridItem>
                </div>
            </div>


        </>



    )
}
