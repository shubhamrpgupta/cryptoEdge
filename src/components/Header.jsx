import React from 'react';
import { HStack, Button, Text, Stack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} flexDirection={["column", "row"]} >
            <Text p={["0", "2"]} fontSize={"2xl"} color={"white"} as={"b"} >
                CryptoEdge
            </Text>
            <Button p={["0", "2"]} variant={"unstyled"} color={"white"}>
                <Link to="/">Home</Link>
            </Button>
            <Button p={["0", "2"]} variant={"unstyled"} color={"white"}>
                <Link to="/exchanges">Exchanges</Link>
            </Button>
            <Button p={["0", "2"]} variant={"unstyled"} color={"white"}>
                <Link to="/coins">Coins</Link>
            </Button>
        </HStack>
    )
}

export default Header