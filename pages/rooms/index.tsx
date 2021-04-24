import Link from "next/link"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ConversationCard } from "../../components/ConversationCard"

export default () => (
    <>
        <Header />
        <div className="container mt-10">
            <div className="d-flex align-items-center justify-content-between">
                <h1>All conversations</h1>
                <Button color="green" className="ml-40">+ Start room</Button>
            </div>
            <div className="mt-20">
                <Link href="/rooms/test-id-room">
                    <a>
                        <ConversationCard
                            title="Romm #1" 
                            avatars={["https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                            "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"]}
                            users={["Иван Иванови", "Миша Михайловна", "Света Добролюбова"]}
                            guestsCount={100}
                            speakersCount={10}
                        />
                    </a>
                </Link>
            </div>
        </div>
    </>
)