import { FC } from "react"
import clsx from "clsx"

import styles from "./ConversationCard.module.scss"
import { Avatar } from "../Avatar"

interface ConversationCardProps {
    title: string;
    avatars: string[];
    users: string[];
    guestsCount: number;
    speakersCount: number
}

export const ConversationCard: FC<ConversationCardProps> = ({ title, avatars = [], users = [], guestsCount, speakersCount }) => {
    return (
        <div className={clsx("mb-30", styles.card)}>
            <h1 className={styles.title}>{title}</h1>
            <div className={clsx("d-flex mt-10", styles.content)}>
                <div className={styles.avatars}>
                    {avatars.map((img, i) => (
                        <Avatar
                            width="55px"
                            height="55px"
                            src={img}
                            className={i === avatars.length - 1 ? styles.lastAvatar : ''}
                        />
                    ))}
                </div>
                <div className={clsx("ml-10", styles.info)}>
                    <ul className={clsx(styles.users, styles.list)}>
                        {users.map(user => (
                            <li key={user}>
                                {user} <img src="/static/message.png" width="15" height="15" />
                            </li>
                        ))}
                    </ul>
                    <ul className={clsx("d-flex mt-15", styles.details, styles.list)}>
                        <li>
                            {guestsCount} <img src="/static/man-user.png" />
                        </li>
                        <li>
                            {speakersCount} <img src="/static/chat.png" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}