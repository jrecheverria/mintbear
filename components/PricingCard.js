import React from 'react'

import { Card, Spacer, Text } from '@nextui-org/react'

export const PricingCard = (props) => {

  return (
    
    <Card css={{ mw: "330px", marginBottom: "50px"}} isHoverable>
        <Card.Header>
            <Text size={30} textAlign="justify">{props.data.Plan}</Text>
        </Card.Header>
        <Card.Body>   
        </Card.Body>
    </Card>
  )
}
