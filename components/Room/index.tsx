import { FC } from "react"
import clsx from "clsx"
import Link from "next/link"

import { Button } from "../Button"

import styles from "./Room.module.scss"

interface RoomProps {
    title: string;

}

export const Room: FC<RoomProps> = ({ title }) => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <h1>{title}</h1>
                    <div className={clsx("d-felx align-items-center")}>
                        <Link href="/rooms">
                            <a>
                                <Button color="gray" className={styles.leaveButton}>
                                    <img src="/static/victory-hand.png" className="mr-5" />
                                    Leave quietly
                                </Button>
                            </a>
                        </Link>
                    </div>
                </div>
                {/* <div className={styles.users}>
                    {users.map(user => <User {...user} />)}
                </div> */}
            </div>
        </div>
    )
}