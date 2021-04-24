import { useRouter } from "next/router"

import { Header } from "../../components/Header"
import { ButtonBack } from "../../components/ButtonBack"
import { Room } from "../../components/Room"

export default function() {
    const router = useRouter()
    const { id } = router.query

    return (
       <>
        <Header />
        <div className="container mt-10">
            <ButtonBack href="/rooms" text="All rooms" />
        </div>
        <Room title="Room #1"/> 
       </>
    )
}