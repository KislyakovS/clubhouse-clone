import { FC } from "react"
import Link from "next/link"

interface ButtonBackProps {
    href: string;
    text?: string
}

export const ButtonBack: FC<ButtonBackProps> = ({ href, text = "Back" }) => {
    return (
        <Link href={href}>
                <a>
                    <div className="d-flex align-items-center">
                        <img src="/static/back-arrow.svg" alt="Back" className="mr-10"/>
                        <h4 style={{ position: "relative", top: 1 }}>{text}</h4>
                    </div>
                </a>
            </Link>
    )
}