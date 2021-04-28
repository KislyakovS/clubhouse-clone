import { FC, useContext, useEffect, useCallback } from "react"
import clsx from "clsx"

import { WhiteBlock } from "../../WhiteBlock"
import { Button } from "../../Button"
import { StepInfo } from "../../StepInfo"

import styles from "./TwitterStep.module.scss"

import { MainContext } from "../../../pages"

export const TwitterStep: FC = () => {
    const { onNextStep } = useContext(MainContext)

    const onClickAuth = () => {
        const win = window.open('http://localhost:3001/auth/github', "Auth", "width=500,height=500,status=yes,toolbar=no,menubar=no,location=no")

        const timer = setInterval(() => {
            if (win.closed) {
                clearInterval(timer)
                onNextStep()
            }            
        }, 100)
    }

    const onMessage = useCallback((user) => {
        console.log(user)
    }, [])

    useEffect(() => {
        window.addEventListener("message", onMessage)
    }, [])

    return (
        <div className={styles.block}>
            <StepInfo
                icon="/static/connect.png"
                title="Do you want import info from Twitter?"
            />
            <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
                <div className={clsx("d-ib", styles.avatar)}></div>
                <h2 className="mb-40">Alexandr Kislyakov</h2>
                <Button onClick={onClickAuth}>
                    <img className="mr-10" src="/static/twitter.png" alt="Twitter logo"/>
                    Import from GitHub
                    <img className="d-ib ml-10" src="/static/arrow.png" />
                </Button>
                <div className="link mt-20 cup d-ib">Enter my info manually</div>
            </WhiteBlock>
        </div>
    )
}