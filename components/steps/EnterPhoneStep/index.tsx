import { FC } from "react"
import clsx from "clsx"

import { StepInfo } from "../../StepInfo"
import { WhiteBlock } from "../../WhiteBlock"
import { Button } from "../../Button"

import styles from "./EnterPhoneStep.module.scss"

export const EnterPhoneStep: FC = () => {
    return (
        <div className={styles.block}>
            <StepInfo 
                icon="/static/phone/png"
                title="Enter your phone #"
                description="We will send you a confirmation code"
            />
            <WhiteBlock className={clsx("m-auto mt-30", styles.whiteBlock)}>
                <div className={clsx("mb-30", styles.input)}>

                </div>
                <Button disabled={true}>
                    Next
                    <img src="d-ib ml-10" alt="/static/arrow.png"/>
                </Button>
                <p className={clsx("mt-30", styles.policyText)}>
                    By entering your number, you`er agreeing to out.
                    Terms of Service and and Privacy Policy. Thanks!
                </p>
            </WhiteBlock>
        </div>
    )
}