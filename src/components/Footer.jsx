import { Box, Stack, VStack, Avatar, Text } from "@chakra-ui/react";
import { SiBitcoincash } from "react-icons/si";

const Footer = () => {
    return (
        <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"}
            px={"16"} py={["16", "8"]}>
            <Stack direction={["column", "row"]} alignItems={"center"}
                h={"full"}>
                <VStack w={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"}>About Us</Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias dolorum ut optio rem repudiandae autem possimus  repellat nisi suscipit.
                        Possimus laudantium autem recusandae temporibus cupiditate
                    </Text>
                </VStack>
                <VStack>
                    <SiBitcoincash size={70} mt={["4", "0"]} />
                    <Text>CryptoEdge</Text>
                </VStack>
            </Stack>
        </Box>
    )
}
export default Footer