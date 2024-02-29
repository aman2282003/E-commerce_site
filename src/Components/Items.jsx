import { useState } from "react"
import Data from "../db2.json"
import { Button } from '@chakra-ui/react';
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";


export const Items = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => prevIndex - 6 < 0 ? 0 : prevIndex - 6);
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => prevIndex + 6 >= Data.length ? prevIndex : prevIndex + 6);
    };


    function User({ user }) {
        return (
            <>

                <div className=' m-3 p-3 w-[200px] h-[340px]'>
                    <div className='flex justify-center'>

                        <img src={user.image} alt="image" style={{ height: "100px", width: "120px" }} />
                        <CiHeart style={{ height: "30px", width: "50px", marginRight: "-40px" }} />
                    </div>

                    <p className='font-bold' style={{ marginTop: "30px" }}>${user.price}</p>
                    <p>{user.description.slice(0, 50)}</p>
                    <div className='flex justify-center m-1'>
                        <Button className='border mt-2 border-black  p-2 rounded-full'>Add to cart+</Button>
                    </div>
                </div >


            </>
        );
    }





    return (
        <>

            <div className="flex mx-[60px] my-[30px] flex-wrap">
                <div className=' h-[100%]'>
                    <p className='mt-2 font-bold text-2xl'>More fresh minds</p>
                    <div className='flex flex-wrap '>
                        {Data.slice(currentIndex, currentIndex + 6).map((ele) => (
                            <User user={ele} key={ele.id} />
                        ))}
                        <TfiArrowCircleLeft className="hidden md:flex" onClick={handlePrevClick} style={{ position: "absolute", color: "grey", marginTop: "9%", marginLeft: "-3%", height: "40px", width: "50px" }} />
                        <TfiArrowCircleRight className="hidden md:flex" onClick={handleNextClick} style={{ position: "absolute", color: "grey", marginTop: "9%", marginLeft: "90%", height: "40px", width: "50px" }} />
                    </div>

                </div>

            </div>


        </>



    )
}
