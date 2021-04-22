import clsx from "clsx"

import { StepInfo } from "../../StepInfo"
import { WhiteBlock } from "../../WhiteBlock"
import { Button } from "../../Button"

import styles from "./EnterNameStep.module.scss"

export const EnterNameStep = () => {
    return (
        <div className={styles.block}>
            <StepInfo 
                icon="/static/man.png"
                title="What's your full names?"
                description="People use real names on Clubhouse :) Thnx!"
            />
            <WhiteBlock className={clsx("m-auto", styles.whiteBlock)}>
                <div className="mb-30">
                    <input className="field" type="text" placeholder="Enter fullname"/>
                </div>
                <Button>
                    Next
                    <img className="d-ib ml-10" src="/static/arrow.png" />
                </Button>
            </WhiteBlock>
        </div>
    )
}