import clsx from "clsx"
import { WhiteBlock } from "../../WhiteBlock"
import { Button } from "../../Button"
import { StepInfo } from "../../StepInfo"

import styles from "./TwitterStep.module.scss"

export const TwitterStep = () => {
    return (
        <div className={styles.block}>
            <StepInfo
                icon="/static/connect.png"
                title="Do you want import info from Twitter?"
            />
            <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
                <div className={clsx("d-ib", styles.avatar)}></div>
                <h2 className="mb-40">Alexandr Kislyakov</h2>
                <Button>
                    <img className="mr-10" src="/static/twitter.png" alt="Twitter logo"/>
                    Import from Twitter
                    <img className="d-ib ml-10" src="/static/arrow.png" />
                </Button>
                <div className="link mt-20 cup d-ib">Enter my info manually</div>
            </WhiteBlock>
        </div>
    )
}