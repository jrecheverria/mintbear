import React from "react";
import { Layout } from "../components/Layout.js";
import { Hero } from "../components/Hero.js"
import { Topbar } from '../components/Topbar.js'
import { FeaturesSection } from "../components/FeaturesSection.js";
import { HowItWorksSection } from "../components/HowItWorksSection.js";
import { ReadyToDeploySection } from "../components/ReadyToDeploySection.js";
import { FAQSection } from "../components/FAQSection.js";
import { Spacer } from "@nextui-org/react";
import { EmailSection } from "../components/EmailSection.js";
import { FooterSections } from "../components/FooterSections.js";
// import { PricingSection } from "../components/PricingSection.js";


export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorksSection />
      <Spacer y={5} />
      <FeaturesSection />
      <Spacer y={5} />
      {/* <PricingSection/> */}
      <ReadyToDeploySection/>
      <Spacer y={2} />
      <FAQSection />
      <Spacer y={2} />
      <EmailSection />
      <Spacer y={2} />
      {/* <FooterSections /> */}
    </div>
      
  )
}
