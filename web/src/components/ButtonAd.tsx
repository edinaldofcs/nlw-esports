import axios from "axios";
import { useState } from "react";


export function ButtonAd(props: { adId: string }) {
    const [discord, setDiscord] = useState("Ver discord");
  
    async function handleShowDiscord(adId: string) {
      await axios(`http://localhost:5000/ads/${adId}/discord`).then((res) =>
        setDiscord(res.data.discord)
      );
    }
    return (
      <button
        onClick={() => handleShowDiscord(props.adId)}
        className="py-2 px-4 bg-violet-500 text-white rounded transition duration-150 hover:bg-violet-600 "
      >
        {discord}
      </button>
    );
  }