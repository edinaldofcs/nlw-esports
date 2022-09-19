import "../../styles/main.css";
import * as Dialog from "@radix-ui/react-dialog";
import { GameBanner, GameProps } from "../../components/GameBanner";
import { CreateAdModal } from "../../components/Form/createAdModal copy";
import { CreateAdBanner } from "../../components/CreateAdBanner";

export interface GamePropsHome {
  games: {
    bannerUrl: string;
    title: string;
    _count: {
      ads: number;
    };
    id?: string;
  }[];
}

export function Home({ games }: GamePropsHome) {
  return (
    <>
      <h1 className="text-2xl sm:text-6xl md:text-6xl text-white font-black mt-10">
        Seu{" "}
        <span className="text-transparent bg-gradient1 bg-clip-text">duo</span>{" "}
        está aqui.
      </h1>

      <div className="grid  gap-4 mt-10 max-w-[90%] md:grid-cols-5 sm:grid-cols-2">
        {games.map((game: GameProps) => (
          <GameBanner
            bannerUrl={game.bannerUrl}
            title={game.title}
            _count={game._count}
            id={game.id}
            key={game.id}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </>
  );
}
