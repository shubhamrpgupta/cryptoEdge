import React from 'react';
import { Box, Text, Image } from "@chakra-ui/react";
import img from "../assets/3.jpg";

const Home = () => {
    return (
        <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
            <Image src={img} w={"full"} h={"full"}
                objectFit={"contain"} bgColor={"blackAlpha.900"} />

        </Box>
    )
}

export default Home