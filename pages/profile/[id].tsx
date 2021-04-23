import { useRouter } from "next/router"
import { Header } from "../../components/Header"

import { Profile } from "../../components/Profile"

export default function() {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Header />
            <div className="container mt-10">
                <Profile
                    fullname="Alexandr Kislyakov"
                    username="alex"
                    avatarUrl="https://habrastorage.org/getpro/moikrug/uploads/user/100/039/975/4/avatar/medium_e2b1f565fb60983bf0dfc7a847b32187.png"
                    about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>
        </>
    )
}