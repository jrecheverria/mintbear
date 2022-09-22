import { Button, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import { Box } from './Box'

export const ReadyToDeploySection = () => {
  return (
    <Box css={{display: "flex", backgroundColor: "#757da0", flexDirection: "column", height: "auto", alignItems: "center", px: "$12", "@xsMax": {px: "$10"}}}>
        <Spacer y={4}/>
        <Text h2 size={50} color="white">Ready to deploy your ERC20 Token?</Text>
        <Spacer y={1}/>
        <Text color="white" b>Try building your ERC20 Token in less than a minute. You can try on Test Network before to go live.</Text>
        <Spacer y={2}/>
        <Button color="gradient" size="xl">Create ERC20 Token</Button>
        <Spacer y={4}/>
    </Box>
  )
}
