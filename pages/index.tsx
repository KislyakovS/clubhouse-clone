import { useState, createContext } from "react"
import Head from "next/head"
import { WelcomeStep } from "../components/steps/WelcomeStep"
import { EnterNameStep } from "../components/steps/EnterNameStep"
import { TwitterStep } from "../components/steps/TwitterStep"
import { ChooseAvatarStep } from "../components/steps/ChooseAvatarStep"
import { EnterPhoneStep } from "../components/steps/EnterPhoneStep"
import { EnterCodeStep } from "../components/steps/EnterCodeStep"

const stepsComponents = {
  0: WelcomeStep,
  1: TwitterStep,
  2: EnterNameStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep
}

interface MainContextProps {
  onNextStep: () => void;
  step: number
}

export const MainContext = createContext<MainContextProps>({} as MainContextProps)

export default function Home() {
  const [step, setStep] = useState(0)
  const Step = stepsComponents[step]

  const onNextStep = () => {
    setStep(prev => prev + 1)
  }

  return (
    <div>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <MainContext.Provider value={{ step, onNextStep }}>
        <Step />
      </MainContext.Provider>
    </div>
  )
}
