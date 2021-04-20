import { useState } from "react"
import Head from "next/head"
import { WelcomeStep } from "../components/steps/WelcomeStep"
import { EnterNameStep } from "../components/steps/EnterNameStep"
import { TwitterStep } from "../components/steps/TwitterStep"


const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep
}

export default function Home() {
  const [step, setStep] = useState(1)
  const Step = stepsComponents[step]

  return (
    <div>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <Step />
    </div>
  )
}
