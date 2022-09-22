import React, { useState, useRef } from "react";
import { Navbar, Button, Link, Text, Dropdown } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export const Topbar = () => {

  const collapseItems = [
    "Features",
    "Pricing",
    "Generators",
    "Pricing",
  ];

  const goToHowItWorks = () => {
    const anchor = document.querySelector('#how-it-works')
   anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const goToFeatures = () => {
    const anchor = document.querySelector('#features')
   anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const goToPricing = () => {
    const anchor = document.querySelector('#pricing')
   anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle css={{"@xs": {display: "none"}}} aria-label="toggle navigation"/>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            MintBear
          </Text>
        </Navbar.Brand>

        <Navbar.Content enableCursorHighlight hideIn="xs">
          <Navbar.Link variant="underline"  onClick={goToHowItWorks}>How It Works</Navbar.Link>
          <Navbar.Link variant="underline"  onClick={goToFeatures}>Features</Navbar.Link>

          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}
              >
                Generators
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="ERC20 Token on Ethereum"
              >
                ERC20 Token on Ethereum
              </Dropdown.Item>
              <Dropdown.Item
                key="ERC20 Token on Polygon"
              >
                ERC20 Token on Polygon
              </Dropdown.Item>
              <Dropdown.Item
                key="ERC20 Token on Binance"
              >
                ERC20 Token on Binance
              </Dropdown.Item>
              <Dropdown.Item
                key="ERC20 Token on Avalanche"      
              >
                ERC20 Token on Avalanche
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


          <Navbar.Link variant="underline" onClick={goToPricing}>Pricing</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Connect Wallet
            </Button>
          </Navbar.Item>
        </Navbar.Content>

        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>   
  )
}
