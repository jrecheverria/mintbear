import React from 'react'
import { Box } from "./Box.js"
import { Collapse, Text } from "@nextui-org/react";

export const FAQSection = () => {
  return (
    <Box css={{display: "flex", flexDirection: "column", alignItems: "center", px: "$12", "@xsMax": {px: "$10"}}}>
        <Text h2 size={50}>FAQ</Text>
        <Collapse.Group>
            <Collapse title="Token Generator">
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                </Text>
            </Collapse>
            <Collapse title="Token Features">
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                </Text>
            </Collapse>
            <Collapse title="Token Behaviors">
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                </Text>
            </Collapse>
            <Collapse title="Ethereum Blockchain and Ecosystem">
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                </Text>
            </Collapse>
        </Collapse.Group>
    </Box>
  )
}
