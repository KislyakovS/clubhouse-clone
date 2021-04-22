import { FC, useContext } from "react"
import { WhiteBlock } from "../../WhiteBlock"
import { Button } from "../../Button"

import styles from "./WelcomeStep.module.scss"

import { MainContext } from "../../../pages"

export const WelcomeStep: FC = () => {
    const { onNextStep } = useContext(MainContext)

    return (
        <WhiteBlock className={styles.block}>
            <h3 className={styles.title}>
                <img className={styles.handWeveImg} src="/static/hand-wave.png" alt="Colebration" />
                Welcome to Clubhouse!
            </h3>
            <p>
                We`re working hard to get Cloubhouse ready for everyone! While we wrap up the finishing
                youches, we`re adding people gradually to make sure nothing breaks :) 
            </p>
            <div>
                <Button onClick={onNextStep}>
                    Get yout username
                    <img className="d-ib ml-10" src="/static/arrow.png" />
                </Button>
            </div>
            <div className="link mt-15 cup d-ib">Have an invite text? Sign in</div>
        </WhiteBlock>
    )
}