import React from 'react'
import { Card, Text, Spacer } from "@nextui-org/react";

export const DisclaimerCard = () => {
  return (
    <Card variant="bordered">
        <Card.Header>
            <Spacer x={0.5}/>
            <Text size={30}>DISCLAIMER</Text>
        </Card.Header>
        <Card.Body>
            <Text css={{textAlign: "left"}}>MintBear and its company are free of any liability regarding Tokens built using Token Generator, and the use that is made of them. Tokens built on Token Generator, their projects, their teams, their use of Token (as well as anything related to Token) are in no way connected to MintBear or its company. </Text>
        </Card.Body>
    </Card>
  )
}
