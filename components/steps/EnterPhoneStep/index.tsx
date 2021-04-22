import { FC, useState, useContext } from "react"
import clsx from "clsx"
import NumberFormat, { NumberFormatValues } from "react-number-format"

import { StepInfo } from "../../StepInfo"
import { WhiteBlock } from "../../WhiteBlock"
import { Button } from "../../Button"

import styles from "./EnterPhoneStep.module.scss"

import { MainContext } from "../../../pages"

export const EnterPhoneStep: FC = () => {
    const { onNextStep } = useContext(MainContext)
    const [inputValue, setInputValue] = useState<NumberFormatValues>({} as NumberFormatValues)

    const isButtonDisabled = !inputValue.formattedValue || inputValue.formattedValue?.includes("_")

    return (
        <div className={styles.block}>
            <StepInfo 
                icon="/static/phone.png"
                title="Enter your phone #"
                description="We will send you a confirmation code"
            />
            <WhiteBlock className={clsx("m-auto mt-30", styles.whiteBlock)}>
                <div className={clsx("mb-30", styles.input)}>
                    <NumberFormat
                         className="field"
                         format="+# (###) ###-##-##"
                         mask="_"
                         placeholder="+7 (999) 999-99-99"
                         value={inputValue.value}
                         onValueChange={setInputValue}
                    />
                </div>
                <Button disabled={isButtonDisabled} onClick={onNextStep}>
                    Next
                    <img className="d-ib ml-10" src="/static/arrow.png" />
                </Button>
                <p className={clsx("mt-30", styles.policyText)}>
                    By entering your number, you`er agreeing to out.
                    Terms of Service and and Privacy Policy. Thanks!
                </p>
            </WhiteBlock>
        </div>
    )
}