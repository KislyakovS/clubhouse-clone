import { useRouter } from "next/router"

import { Header } from "../../components/Header"
import { ButtonBack } from "../../components/ButtonBack"
import { Room } from "../../components/Room"

import Axios from "../../core/axios"

export default function({ room }) {
    const router = useRouter()
    const { id } = router.query

    return (
       <>
        <Header />
        <div className="container mt-10">
            <ButtonBack href="/rooms" text="All rooms" />
        </div>
        <Room title={room.title}/> 
       </>
    )
}
export const getServerSideProps = async ({ query }) => {
    try {
        const { id } = query
      const { data } = await Axios.get("/rooms.json");
      const room = data.find(it => it.id === id)
      return {
        props: {
          room
        }
      }
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  
    return {
      props: {
        room: {}
      }
    }
  }