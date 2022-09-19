import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonAd } from "../../components/ButtonAd";
import { TextAd } from "../../components/TextAd";

export function GameAd() {
  const { id, title } = useParams();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios(`http://localhost:5000/games/${id}/ads`).then((res) =>
      setAds(res.data)
    );
  }, []);

  return (
    <div className="max-w-[100%] mx-auto grid grid-cols-2 gap-2 items-center my-10 text-zinc-400">
      <div className="absolute top-24 text-white text-lg">Game: {title}</div>
      {ads.map((ad: any) => (
        <div
          key={ad.id}
          className="w-96 bg-zinc-900 py-6 px-3 flex flex-col gap-2 rounded-lg"
        >
          <h3 className="text-white text-center font-bold mb-2">Anúncio</h3>
          <TextAd title="nome:" text={ad.name} />
          <TextAd title="Joga em:" text={ad.weekDays} />
          <TextAd
            title="Usa canal de voz?"
            text={ad.useVoiceChannel ? "Sim" : "Não"}
            classBoolean={ad.useVoiceChannel ? "sim" : "não"  }
          />
          <TextAd
            title="Há quanto tempo joga:"
            text={
              ad.yearsPlaying < 1
                ? "Pouco tempo"
                : ad.yearsPlaying > 1
                ? `${ad.yearsPlaying} anos`
                : `${ad.yearsPlaying} ano`
            }
          />
          <TextAd title="Vai entrar às:" text={ad.hourStart} />
          <TextAd title="Vai sair às:" text={ad.hourEnd} />
          <ButtonAd adId={ad.id} />
        </div>
      ))}
    </div>
  );
}
