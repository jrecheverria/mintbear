import React from 'react'
import { Box } from "./Box.js"
import { Grid, Button, Spacer, Text } from '@nextui-org/react'

import { FeatureCard } from './FeatureCard';

import { BiWallet, BiCustomize, BiRocket } from "react-icons/bi"

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works">
    <Box css={{display: "flex", backgroundColor: "#757da0", flexDirection: "column", alignItems: "center", px: "$12", "@xsMax": {px: "$10"}}}>
        <Spacer y={4}/>
        <Text h2 size={50} color="white">How It Works</Text>
        <Spacer y={1}/>
        <Text h4 color="white">Create ERC20 Token in less than a minute.</Text>
        <Spacer y={2}/>
        <Grid.Container>
          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<BiWallet size={30}/>} cardHeaderText="Connect" cardBodyText="Install MetaMask and load your wallet with an amount of ETH to pay for contract deployment."/>
          </Grid>
          
          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<BiCustomize size={30}/>} cardHeaderText="Customize" cardBodyText="Build and customize your token with our easy guided form."/>
          </Grid>

          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<BiRocket size={30}/>} cardHeaderText="Deploy" cardBodyText="Confirm your transaction using MetaMask and deploy your token."/>
          </Grid>
        </Grid.Container>
        
        <Spacer y={1.5}/>
        <Button color="gradient" size="xl" auto>Get Started</Button>
        <Spacer y={4}/>
    </Box>
    </section>
  )
}
