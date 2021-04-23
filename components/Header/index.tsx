import { FC } from "react"
import Link from "next/link"
import clsx from "clsx"

import { Avatar } from "../Avatar"

import styles from "./Header.module.scss"

export const Header: FC = () => {
    return (
        <div className="container pt-10">
            <div className="d-flex align-items-center justify-content-between">
                <Link href="/rooms">
                    <a>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className={clsx(styles.headerLogo, "d-flex align-items-center")}>
                                <img src="/static/hand-wave.png" alt="Logo" className="mr-10" style={{ width: 24, height: 24 }}/>
                                <h4>Clubhouse</h4>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="/profile/12">
                    <a>
                        <div className="d-flex align-items-center cup">
                            <b className="mr-5">Alexandr Kislyakov</b>
                            <Avatar 
                                src="https://habrastorage.org/getpro/moikrug/uploads/user/100/039/975/4/avatar/medium_e2b1f565fb60983bf0dfc7a847b32187.png"
                                width="50px"
                                height="50px"
                            />
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}