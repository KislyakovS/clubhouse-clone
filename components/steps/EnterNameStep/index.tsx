import { ChangeEvent, FC, useContext, useState } from "react"
import clsx from "clsx"

import { StepInfo } from "../../StepInfo"
import { WhiteBlock } from "../../WhiteBlock"
import { Button } from "../../Button"

import styles from "./EnterNameStep.module.scss"

import { MainContext } from "../../../pages"

export const EnterNameStep: FC = () => {
    const { onNextStep, userData, setFieldValue } = useContext(MainContext)
    //const [inputValue, setInputValue] = useState("")
    const [userName, setUserName] = useState(userData.fullname)

    const isButtonDisabled = userName.trim() === ""

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    const handleButtonNext = () => {
        setFieldValue("fullname", userName);
        onNextStep()
    }

    return (
        <div className={styles.block}>
            <StepInfo 
                icon="/static/man.png"
                title="What's your full names?"
                description="People use real names on Clubhouse :) Thnx!"
            />
            <WhiteBlock className={clsx("m-auto", styles.whiteBlock)}>
                <div className="mb-30">
                    <input className="field" type="text" value={userName} onChange={handleInputChange} placeholder="Enter fullname"/>
                </div>
                <Button onClick={handleButtonNext} disabled={isButtonDisabled}>
                    Next
                    <img className="d-ib ml-10" src="/static/arrow.png" />
                </Button>
            </WhiteBlock>
        </div>
    )
}