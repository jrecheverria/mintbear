import React from 'react'
import { Button, Input, Spacer, Text } from '@nextui-org/react'
import { Box } from './Box'

export const EmailSection = () => {
  return (
    <Box css={{display: "flex", backgroundColor: "#757da0", flexDirection: "column", alignItems: "center", px: "$12", "@xsMax": {px: "$10"}}}>
        <Spacer y={4}/>
        <Text h2 size={50} color="white">Join Our Mailing List!</Text>
        <Spacer y={1}/>
        <Text h4 color="white" css={{textAlign: "center"}}>The Mintbear team is working on bringing you more exciting features</Text>
        <Text h4 color="white" css={{textAlign: "center"}}>Join our mailing list to be the first to know of new features</Text>
        <Spacer y={3}/>
        <Input labelPlaceholder="Email" size="xl"/>
        <Spacer y={1} />
        <Button color="gradient" size="xl" auto >Join</Button>
        <Spacer y={4}/>
    </Box>
  )
}
