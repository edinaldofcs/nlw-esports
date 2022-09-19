import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";


export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-gradient1 w-[90%] rounded-lg mt-4">
      <div className="bg-[#2a2634] py-4 px-4 w-[100%] flex justify-between items-center md:flex-row sm:flex-col sm:gap-4">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400">
            Publique um anúncio para encontrar novos players
          </span>
        </div>
        <Dialog.Trigger className="py-2 px-4 bg-violet-500 text-white rounded transition duration-150 hover:bg-violet-600 flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
