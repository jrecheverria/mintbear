import React from 'react'
import { Box } from './Box'
import { Grid, Text } from '@nextui-org/react'

export const FooterSections = () => {
  return (
    <Box css={{display: "flex", backgroundColor: "#757da0", flexDirection: "column", alignItems: "center", px: "$12", "@xsMax": {px: "$10"}}}>
        <Grid.Container>
          <Grid xs ={12} sm={12} md={4} justify="center">
            <Text h6>Token Generator</Text>
          </Grid>
          <Grid xs ={12} sm={12} md={4} justify="center">
            <Text h6>Token Generator</Text>
          </Grid>
          <Grid xs ={12} sm={12} md={4} justify="center">
            <Text h6>Token Generator</Text>
          </Grid>
          <Grid xs ={12} sm={12} md={4} justify="center">
            <Text h6>Token Generator</Text>
          </Grid>
        </Grid.Container>
    </Box>
  )
}
