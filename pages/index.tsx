import { useState, createContext, Dispatch, SetStateAction } from "react"
import Head from "next/head"
import { WelcomeStep } from "../components/steps/WelcomeStep"
import { EnterNameStep } from "../components/steps/EnterNameStep"
import { GitHubStep } from "../components/steps/GitHubStep"
import { ChooseAvatarStep } from "../components/steps/ChooseAvatarStep"
import { EnterPhoneStep } from "../components/steps/EnterPhoneStep"
import { EnterCodeStep } from "../components/steps/EnterCodeStep"

const stepsComponents = {
  0: WelcomeStep,
  1: GitHubStep,
  2: EnterNameStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep
}

type User = {
  id: number;
  fullname: string;
  avatarUrl: string;
  isActive: number;
  username: string;
  phone: string
}

interface MainContextProps {
  onNextStep: () => void;
  setUserData: Dispatch<SetStateAction<User>>;
  setFieldValue: (field: keyof User, value: string) => void;
  step: number;
  userData: User;
}

export const MainContext = createContext<MainContextProps>({} as MainContextProps)

export default function Home() {
  const [step, setStep] = useState(4)
  const [userData, setUserData] = useState<User>()
  const Step = stepsComponents[step]

  const onNextStep = () => {
    setStep(prev => prev + 1)
  }

  const setFieldValue = (field: keyof User, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <MainContext.Provider value={{ step, onNextStep, userData, setUserData, setFieldValue }}>
        <Step />
      </MainContext.Provider>
    </div>
  )
}

// npx sequelize-cli model:generate --name code --attributes code:string,user_id:integer