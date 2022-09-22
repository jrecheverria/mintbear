// import React from 'react'
// import { Box } from './Box'
// import { Grid, Spacer, Text } from '@nextui-org/react'
// import { PricingCard } from './PricingCard'

// const pricingData = require('./constants/PricingData.json')

// export const PricingSection = () => {
//   return (
//     <section id="pricing">
//     <Box css={{display: "flex", flexDirection: "column", alignItems: "center", px: "$12", "@xsMax": {px: "$10"}}}>
//         <Text h2 size={50}>Pricing</Text>
//         <Spacer y={1}/>
//         <Spacer y={1}/>
        
//         <Grid.Container>
//           <Grid xs ={12} sm={12} md={4} justify="center"> 
//           {
//             pricingData.map((data, index) => {
//               return (
//                 <PricingCard data={pricingData}/>
//               )
//             })
//           } 
//           </Grid>
          
//         </Grid.Container>
//     </Box>
//     </section>
//   )
// }
