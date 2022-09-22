import React from 'react'
import { Box } from "./Box.js"
import { Grid, Spacer, Text } from '@nextui-org/react'

import { FeatureCard } from './FeatureCard';

import { VscRocket } from "react-icons/vsc"
import { GiCancel } from "react-icons/gi"
import { BiCustomize } from "react-icons/bi"
import { DisclaimerCard } from './DisclaimerCard.js';

export const FeaturesSection = () => {
  return (
    <section id="features">
    <Box css={{display: "flex", flexDirection: "column", alignItems: "center", px: "$12", "@xsMax": {px: "$10"}}}>
        <Spacer y={4}/>
        <Text h2 size={50}>Features</Text>
        <Spacer y={1}/>
        <Text h4>Create and customize your token and choose between several features.</Text>
        <Spacer y={2}/>
        <Grid.Container>
          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<VscRocket size={40}/>} cardHeaderText="Fast" cardBodyText="No technical knowledge needed. You customize your token, we'll handle the smart contract."/>
          </Grid>
          
          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<GiCancel size={40}/>} cardHeaderText="No Code" cardBodyText="No technical knowledge needed. You customize your token, we'll handle the smart contract."/>
          </Grid>

          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<BiCustomize size={40}/>} cardHeaderText="Customizable" cardBodyText="Choose between token options like brunable, mintable, capped and more."/>
          </Grid>

          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<VscRocket size={40}/>} cardHeaderText="Fast" cardBodyText="No technical knowledge needed. You customize your token, we'll handle the smart contract."/>
          </Grid>
          
          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<GiCancel size={40}/>} cardHeaderText="No Code" cardBodyText="No technical knowledge needed. You customize your token, we'll handle the smart contract."/>
          </Grid>

          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<BiCustomize size={40}/>} cardHeaderText="Customizable" cardBodyText="Choose between token options like brunable, mintable, capped and more."/>
          </Grid>

          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<VscRocket size={40}/>} cardHeaderText="Fast" cardBodyText="No technical knowledge needed. You customize your token, we'll handle the smart contract."/>
          </Grid>
          
          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<GiCancel size={40}/>} cardHeaderText="No Code" cardBodyText="No technical knowledge needed. You customize your token, we'll handle the smart contract."/>
          </Grid>

          <Grid xs ={12} sm={12} md={4} justify="center">
            <FeatureCard cardIcon={<BiCustomize size={40}/>} cardHeaderText="Customizable" cardBodyText="Choose between token options like brunable, mintable, capped and more."/>
          </Grid>
        </Grid.Container>
        <DisclaimerCard />
      </Box>
      </section>
  )
}
