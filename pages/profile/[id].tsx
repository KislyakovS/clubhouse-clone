import { useRouter } from "next/router"
import { Avatar } from "../../components/Avatar"
import { Button } from "../../components/Button"

export default function() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div className="pt-50 pl-50 pr-50">
            <div className="d-flex align-items-center">
                <img src="/static/back-arrow.svg" alt="Back" className="mr-10"/>
                <h4>Back</h4>
            </div>

            <div className="d-flex align-items-center">
                <div className="d-flex">
                    <Avatar className="mr-30" width="100px" height="100px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/party-popper_1f389.png" />
                    <div className="d-flex justify-content-center flex-column">
                        <h2 className="mt-0 mb-0">Alexandr</h2>
                        <h3 className="mt-0 mb-0">@Alexandr</h3>
                    </div>
                </div>
                <Button className="ml-50" color="blue">Follow</Button>
            </div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            </p>
        </div>
    )
}