import React, { useEffect, useState } from 'react';
import axios from "axios";
import { server } from '../main';
import { Container, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";
import Loader from './Loader';
import ErrorComp from './ErrorComp';
import CoinCard from './CoinCard';


const Coins = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("inr");

    const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
    const changePage = (page) => {
        setPage(page);
        setLoading(true)
    }

    const paginationBtns = new Array(130).fill(1);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(
                    `${server}/coins/markets?vs_currency=${currency}&page=${page}`
                );
                setCoins(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }

        }
        fetchCoins();
    }, [currency, page])

    if (error) return <ErrorComp message={"Error while fetching data..."} />

    return (
        <Container maxW={"container.xl"}>
            {loading ? <Loader /> :
                (
                    <>

                        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                            <HStack spacing={"4"}>
                                <Radio value={"inr"}>INR</Radio>
                                <Radio value={"eur"}>EUR</Radio>
                                <Radio value={"usd"}>USD</Radio>
                            </HStack>
                        </RadioGroup>

                        <HStack wrap={"wrap"} justifyContent={"space-evenly"} >
                            {coins.map((i) => (
                                <CoinCard
                                    key={i.id}
                                    name={i.name}
                                    img={i.image}
                                    id={i.id}
                                    symbol={i.symbol}
                                    price={i.current_price}
                                    currencySymbol={currencySymbol}
                                />
                            ))}
                        </HStack>

                        <HStack w={"full"} overflow={"auto"} p={"8"}>
                            {paginationBtns.map((item, index) => (
                                <Button
                                    key={index}
                                    onClick={() => changePage(index + 1)}
                                    bgColor={"blackAlpha.900"}
                                    color={"white"} >
                                    {index + 1}
                                </Button>
                            ))}
                        </HStack>
                    </>
                )
            }
        </Container >
    )
}




export default Coins;