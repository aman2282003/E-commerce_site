import { useState } from "react"
import Data from "../db.json"
import { Button } from '@chakra-ui/react';
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import video1 from "../assets/Videos/2.mp4"


export const Flashdeals3 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => prevIndex - 3 < 0 ? 0 : prevIndex - 3);
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => prevIndex + 3 >= Data.length ? prevIndex : prevIndex + 3);
    };


    function User({ user }) {
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
                        <Button className='border mt-2 border-black  p-2 rounded-full'>Add to cart+</Button>
                    </div>
                </div >


            </>
        );
    }





    return (
        <>

            <div className="flex mx-[20px] my-[30px] flex-wrap">
                <div className='w-full md:w-[58%] h-[100%]'>
                    <div className='flex justify-between p-1' >
                        <p className='font-bold text-xl'>Gets what's go viral</p>
                        <p>View All</p>
                    </div>
                    <p className='mt-2'>Find your favourite looks & more</p>
                    <div className='flex flex-wrap '>
                        {Data.slice(currentIndex, currentIndex + 3).map((ele) => (
                            <User user={ele} key={ele.id} />
                        ))}
                        <TfiArrowCircleLeft onClick={handlePrevClick} style={{ position: "absolute", color: "grey", marginTop: "7%", marginLeft: "-1%", height: "40px", width: "50px" }} />
                        <TfiArrowCircleRight onClick={handleNextClick} style={{ position: "absolute", color: "grey", marginTop: "7%", marginLeft: "49%", height: "40px", width: "50px" }} />
                    </div>

                </div>
                <div className="videohidden md:flex video w-[42%] ">
                    <video src={video1} className="h-[100%] hidden md:flex" autoPlay muted></video>
                </div>
            </div>


        </>



    )
}
