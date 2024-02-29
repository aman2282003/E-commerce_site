import { useState } from "react"
import Data from "../db3.json"
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";


export const RoundedElements = () => {


    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => prevIndex - 9 < 0 ? 0 : prevIndex - 9);
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => prevIndex + 9 >= Data.length ? prevIndex : prevIndex + 10);
    };


    function User({ user }) {
        return (
            <>
                <div className='m-3 p-3 w-[115px] h-[200px] flex flex-col justify-center items-center'>
                    <div className='bg-blue-100 overflow-hidden' style={{ height: "140px", width: "140px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={user.thumbnail} alt="image" style={{ height: "100px", width: "120px", objectFit: "cover" }} />
                    </div>
                    <p>{user.title}</p>
                </div>
            </>
        );
    }



    return (
        <div className="flex mx-[60px] my-[30px] flex-wrap">
            <div className=' h-[100%]'>
                <p className='mt-2 font-bold text-2xl'>More fresh minds</p>
                <div className='flex flex-wrap gap-3'>
                    {Data.slice(currentIndex, currentIndex + 9).map((ele) => (
                        <User user={ele} key={ele.id} />
                    ))}
                    <TfiArrowCircleLeft className="hidden md:flex" onClick={handlePrevClick} style={{ position: "absolute", color: "grey", marginTop: "6%", marginLeft: "-4%", height: "40px", width: "50px" }} />
                    <TfiArrowCircleRight className="hidden md:flex" onClick={handleNextClick} style={{ position: "absolute", color: "grey", marginTop: "6%", marginLeft: "90%", height: "40px", width: "50px" }} />
                </div>

            </div>

        </div>

    )
}














