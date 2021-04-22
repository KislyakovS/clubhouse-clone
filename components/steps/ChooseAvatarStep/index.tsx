import { FC, useContext, useState, useRef, useEffect } from "react"
import clsx from "clsx"

import { WhiteBlock } from "../../WhiteBlock"
import { Button } from "../../Button"
import { StepInfo } from "../../StepInfo"
import { Avatar } from "../../Avatar"

import styles from "./ChooseAvatarStep.module.scss"

import { MainContext } from "../../../pages"

export const ChooseAvatarStep: FC = () => {
    const { onNextStep } = useContext(MainContext)
    const inputRef = useRef<HTMLInputElement>(null)
    const [avatarUrl, setAvatarUrl] = useState("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/party-popper_1f389.png")

    const handleChangeImage = (e: Event) => {
        const target = e.target as HTMLInputElement
        const file = target.files[0]
        const imageUrl = URL.createObjectURL(file)
        setAvatarUrl(imageUrl)
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener("change", handleChangeImage)
        }
    })

    return (
        <div className={styles.block}>
            <StepInfo 
                icon="/static/party-popper.png"
                title="Okay, Alexandr Kislyakov!"
                description="How's this photos?"
            />
            <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
                <Avatar 
                    width="120px"
                    height="120px"
                    src={avatarUrl}
                />
                <div className="mb-30">
                    <label htmlFor="image" className="link cup">
                        Choose a different photo
                    </label>
                </div>
                <input id="image" type="file" ref={inputRef} hidden/>
                <Button onClick={onNextStep}>
                    Next
                    <img className="d-ib ml-10" src="/static/arrow.png" alt="Arrow"/>
                </Button>
            </WhiteBlock>
        </div>
    )
}