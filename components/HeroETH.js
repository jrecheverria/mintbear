import React from 'react'
import { Button, Container, Spacer, Text } from "@nextui-org/react";
import { Box } from './Box.js';
import Image from 'next/image'

export const HeroETH = () => {
  return (
    <Box css={{display: "flex", direction: "row", alignItems: "center", justifyContent: "space-evenly", height: "50vh", px: "$12", "@xsMax": {px: "$10"}, alignContent: "center"}}>
        <Box>
            <Text
            h1
            xs={20}
            size={90}
            css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
            >
            Ethereum
            </Text>
            <Text
            h1
            size={90}
            css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold"
            >
            ERC20 Token
            </Text>
            <Spacer y={2}/>
        </Box>
        <Image
        alt="nextui logo"
        src={require('../public/startup.svg')}
        width="500px"
        height="500px"
        />
</Box>
  )
}
