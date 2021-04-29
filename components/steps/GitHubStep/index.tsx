import { FC, useContext, useEffect, useCallback } from "react"
import clsx from "clsx"

import { WhiteBlock } from "../../WhiteBlock"
import { Button } from "../../Button"
import { StepInfo } from "../../StepInfo"

import styles from "./GitHubStep.module.scss"

import { MainContext } from "../../../pages"

export const GitHubStep: FC = () => {
    const { onNextStep, setUserData } = useContext(MainContext)

    const onClickAuth = () => {
        const win = window.open('http://localhost:3001/auth/github', "Auth", "width=500,height=500,status=yes,toolbar=no,menubar=no,location=no")

        const timer = setInterval(() => {
            if (win.closed) {
                clearInterval(timer)
            }            
        }, 100)
    }

    const onMessage = useCallback(({ data: user}) => {
        if (user.avatarUrl) {
            console.log(user)
            setUserData(user)
            onNextStep()
        }
    }, [])

    useEffect(() => {
        window.addEventListener("message", onMessage)

        return () => {
            window.removeEventListener("message", onMessage)
        }
    }, [])

    return (
        <div className={styles.block}>
            <StepInfo
                icon="/static/connect.png"
                title="Do you want import info from GitHub?"
            />
            <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
                <div className={clsx("d-ib", styles.avatar)}></div>
                <h2 className="mb-40">Alexandr Kislyakov</h2>
                <Button onClick={onClickAuth} className={clsx(styles.button, 'd-iflex align-items-center')}>
                    <img className="mr-10" src="/static/twitter.png" alt="Twitter logo"/>
                    Import from GitHub
                    <img className="d-ib ml-10" src="/static/arrow.png" />
                </Button>
                <div className="link mt-20 cup d-ib">Enter my info manually</div>
            </WhiteBlock>
        </div>
    )
}