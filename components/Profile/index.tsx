import { FC, Fragment } from "react"
import Link from "next/link"
import clsx from "clsx"

import { Avatar } from "../Avatar"
import { Button } from "../Button"

import styles from "./Profile.module.scss"

interface ProfileProps {
    fullname: string;
    username: string;
    avatarUrl: string;
    about: string;
}

export const Profile : FC<ProfileProps> = ({ fullname, username, avatarUrl, about }) => {
    return (
        <Fragment>
            <Link href="/rooms">
                <a>
                    <div className="d-flex align-items-center">
                        <img src="/static/back-arrow.svg" alt="Back" className="mr-10"/>
                        <h4 style={{ position: "relative", top: 1 }}>Back</h4>
                    </div>
                </a>
            </Link>
            <div className="d-flex align-items-center">
                <div className="d-flex">
                    <Avatar className="mr-30" width="100px" height="100px" src={avatarUrl} />
                    <div className="d-flex justify-content-center flex-column">
                        <h2 className="mt-0 mb-0">{fullname}</h2>
                        <h3 className={clsx("mt-0 mb-0", styles.username)}>@{username}</h3>
                    </div>
                </div>
                <Button className={clsx("ml-50", styles.follow)} color="blue">Follow</Button>
            </div>
            <p>{about}</p>
        </Fragment>
    )
}