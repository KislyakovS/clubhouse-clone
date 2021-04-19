import Head from "next/head"
import { WelcomeStep } from "../components/steps/WelcomeStep"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <WelcomeStep />
    </div>
  )
}
