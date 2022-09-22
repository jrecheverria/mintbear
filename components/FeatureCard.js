import React from 'react'
import { Card, Text, Spacer } from "@nextui-org/react";

export const FeatureCard = (props) => {
  return (
    <Card css={{ mw: "330px", marginBottom: "50px"}} isHoverable>
        <Card.Header>
            {props.cardIcon}
            <Spacer x={0.5}/>
            <Text size={30}>{props.cardHeaderText}</Text>
         </Card.Header>
        <Card.Body>
            <Text css={{textAlign: "left"}}>{props.cardBodyText}</Text>
        </Card.Body>
    </Card>
  )
}