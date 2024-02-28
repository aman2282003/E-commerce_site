import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import image1 from "../assets/Grid_pics/1.webp"
import image2 from "../assets/Grid_pics/2.webp"
import image3 from "../assets/Grid_pics/3.webp"
import image4 from "../assets/Grid_pics/4.webp"
import image5 from "../assets/Grid_pics/5.webp"
import image6 from "../assets/Grid_pics/6.webp"
import image7 from "../assets/Grid_pics/7.webp"
import image8 from "../assets/Grid_pics/8.webp"
import image9 from "../assets/Grid_pics/9.webp"
import image10 from "../assets/Grid_pics/10.webp"
export const Gridpicture = () => {
    return (
        <div className='m-4'>
            <Grid
                h='1010px'
                templateRows={{ sm: 'repeat(13,1fr)', lg: 'repeat(5, 1fr)' }}
                templateColumns={{ sm: 'repeat(2,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(4, 1fr)' }}
                gap={4}

            >
                <GridItem borderRadius={15} rowSpan={1} colSpan={{ base: 2, lg: 1 }} bgImage={`url(${image1})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                </GridItem>
                <GridItem borderRadius={15} rowSpan={2} colSpan={2} bgImage={`url(${image2})`}
                    backgroundSize="cover"
                    backgroundPosition="center">  </GridItem>
                <GridItem borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${image3})`}
                    backgroundSize="cover" backgroundPosition="center"> </GridItem>
                <GridItem borderRadius={15} rowSpan={3} colSpan={1} bgImage={`url(${image4})`}
                    backgroundSize="cover" backgroundPosition="center"> </GridItem>
                <GridItem borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${image7})`}
                    backgroundSize="cover" backgroundPosition="center"> </GridItem>
                <GridItem borderRadius={15} rowSpan={2} colSpan={1} bgImage={`url(${image5})`}
                    backgroundSize="cover" backgroundPosition="center"></GridItem>
                <GridItem borderRadius={15} rowSpan={2} colSpan={1} bgImage={`url(${image6})`}
                    backgroundSize="cover" backgroundPosition="center"> </GridItem>
                <GridItem borderRadius={15} rowSpan={3} colSpan={1} bgImage={`url(${image10})`}
                    backgroundSize="cover" backgroundPosition="center"> </GridItem>
                <GridItem borderRadius={15} rowSpan={{ base: 2, lg: 1 }} colSpan={1} bgImage={`url(${image8})`}
                    backgroundSize="cover" backgroundPosition="center"> </GridItem>
                <GridItem borderRadius={15} rowSpan={1} colSpan={2} bgImage={`url(${image9})`}
                    backgroundSize="cover" backgroundPosition="center"> </GridItem>


            </Grid>
        </div>
    )
}
