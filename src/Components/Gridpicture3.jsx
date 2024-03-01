import React from 'react'
import { Grid, GridItem, Button } from '@chakra-ui/react'
import image1 from "../assets/Grid3_pics/1.webp"
import image2 from "../assets/Grid3_pics/2.jpg"
import image3 from "../assets/Grid3_pics/3.webp"
import image4 from "../assets/Grid3_pics/4.webp"
import image5 from "../assets/Grid3_pics/5.webp"

export const Gridpicture3 = () => {
    return (
        <div className="hidden md:flex mx-[20px] my-[30px]" >
            <Grid
                h='550px'
                templateRows={'repeat(2, 1fr)'}
                templateColumns={'repeat(5, 1fr)'}
                gap={4}

            >
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={{ base: 10, lg: 2 }} colSpan={{ base: 2, lg: 2 }} bgImage={`url(${image1})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className=' p-5 text-xl text-white'>Patio & Garden</p>
                    <p className=' font-bold px-3 text-4xl text-white'>Receive your<br /> bayward</p>
                    <Button className='m-10 fixed p-3 w-40 border  border-black bg-white rounded-full'>Shop now</Button>
                </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={2} bgImage={`url(${image2})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className=' p-3 text-xl text-white'>From 5$</p>
                    <p className=' font-bold px-3 text-2xl text-white'>Toss in pop of color</p>
                    <a className=' px-5 underline text-white'>show pillows</a> </GridItem>

                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={2} colSpan={1} bgImage={`url(${image5})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className=' p-3 text-xl text-blue'>Patio sets</p>
                    <p className=' font-bold px-3 text-2xl text-blue'>Take a set</p>
                    <a className=' px-5 underline'>shop now</a>  </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${image3})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-2xl text-blue-1000'>Bring on the home flexible heat</p>
                    <a className='p-5 underline'>shop heaters</a> </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${image4})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue'>All outdoors <br />lighting</p>
                    <a className='p-5 underline'>shop now</a></GridItem>



            </Grid>
        </div >
    )
}
