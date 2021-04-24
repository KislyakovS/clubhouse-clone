import { useEffect, useState } from "react";
import Link from "next/link";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ConversationCard } from "../../components/ConversationCard";

import Axios from "../../core/axios";

export default () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get("/rooms.json");
      setRooms(data);
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-10 pb-35">
        <div className="d-flex align-items-center justify-content-between">
          <h1>All conversations</h1>
          <Button color="green" className="ml-40">
            + Start room
          </Button>
        </div>
        <div className="grid mt-20" style={{ gridGap: '35px' }}>
          {rooms.map((room) => (
            <Link href={`/rooms/${room.id}`} key={room.id}>
              <a>
                <ConversationCard {...room} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
