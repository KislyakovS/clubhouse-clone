import { ChangeEvent, FC, useState } from "react"
import { useRouter } from "next/router"
import clsx from "clsx"
import { WhiteBlock } from "../../WhiteBlock"
import { Button } from "../../Button"
import { StepInfo } from "../../StepInfo"

import styles from "./EnterCodeStep.module.scss"


export const EnterCodeStep: FC = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [codes, setCodes] = useState([])

    const isButtonDisabled = codes.some(v => !v) || codes.length < 4

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const id = Number(e.target.getAttribute("id")) - 1
        const value = e.target.value

        setCodes(prev => {
            const newArray = [...prev]
            newArray[id] = value

            return newArray
        })

        if (value === "") {
            if (e.target.previousElementSibling) {
                (e.target.previousElementSibling as HTMLInputElement).focus();
            }   
        } else {
            if (e.target.nextElementSibling) {
                (e.target.nextElementSibling as HTMLInputElement).focus();
            }
        }
    }

    const handleSubmit = () => {
        setIsLoading(true)
        router.push("/rooms")
    }

    return (
        <div className={styles.block}>
             <StepInfo 
                icon="/static/numbers.png"
                title="Enter your activate code"
            />  

            { !isLoading ? (
                            <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
                            <div className={clsx("mb-30", styles.codeInput)}>
                                <input 
                                    type="tel"
                                    placeholder="X"
                                    maxLength={1}
                                    id="1"
                                    onChange={handleChangeInput}
                                    value={codes[0] || ''}
                                />
                                <input 
                                    type="tel"
                                    placeholder="X"
                                    maxLength={1}
                                    id="2"
                                    onChange={handleChangeInput}
                                    value={codes[1] || ''}
                                />
                                <input 
                                    type="tel"
                                    placeholder="X"
                                    maxLength={1}
                                    id="3"
                                    onChange={handleChangeInput}
                                    value={codes[2] || ''}
                                />
                                <input 
                                    type="tel"
                                    placeholder="X"
                                    maxLength={1}
                                    id="4"
                                    onChange={handleChangeInput}
                                    value={codes[3] || ''}
                                />
                            </div>
                            <Button disabled={isButtonDisabled} onClick={handleSubmit}>
                                Next
                                <img className="d-ib ml-10" src="/static/arrow.png" alt="Arrow"/>
                            </Button>
                        </WhiteBlock>
                        
            ) : (
                <div className={clsx("text-center", styles.loader)}>
                    <div className="loader"></div>
                    <h3 className="mt-5">Activation in progress ...</h3>
                </div>
            ) }
        </div>
    )
}