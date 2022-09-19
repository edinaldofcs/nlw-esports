import { Link } from "react-router-dom";

export interface GameProps {
  bannerUrl: string;
  title: string;
  _count: {
    ads: number
  };
  id?: string;
}

export function GameBanner({ bannerUrl, title, _count, id }: GameProps) {
  return (
    <Link to={`/games/${id}/ads/${title}`} className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt={title} className="max-w-[8rem]" />
      <div className="w-full pt-2 pb-2 px-4 bg-gradient2 absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {_count.ads == 0 ? "Sem anúncios" : _count.ads > 1 ? `${_count.ads} anúncios` : `${_count.ads} anúncio`}
        </span>
      </div>
    </Link>  
  );
}
