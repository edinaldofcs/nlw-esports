import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Button } from "./Button";
import { Input } from "./Input";
import { Check, GameController } from "phosphor-react";
import { useEffect, useState, FormEvent } from "react";
import axios from "axios";

export interface GameProps {
  title: string;
  id: string;
}

export function CreateAdModal() {
  const [games, setGames] = useState<GameProps[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    axios("http://localhost:5000/games").then((res) => setGames(res.data));
  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name) {
      return;
    }

    try {
      await axios.post(`http://localhost:5000/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });

      alert("Criado com sucesso!!");
    } catch (error) {
      console.log(error);
      alert("Não foi possível criar o anúncio");
    }
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content
        className="fixed bg-[#2a2634] py-8 px-10 text-white
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-slate-600/25"
      >
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>
        {/* <Dialog.Content> */}
        <form onSubmit={handleCreateAd} className="mt-6 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <select
              name="game"
              id="game"
              className="bg-zinc-900 py-2 px-4 rounded text-sm placeholder:text-zinc-500"
              defaultValue={""}
            >
              <option disabled value="">
                Selecione o game que deseja jogar
              </option>
              {games.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input
              name="name"
              id="name"
              placeholder="Como você quer ser chamado?"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
              <Input
                type="number"
                name="yearsPlaying"
                id="yearsPlaying"
                placeholder="Tudo bem ser ZERO"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="discord">Qual o seu Discord?</label>
              <Input name="discord" id="discord" placeholder="Usuário#01234" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-1"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <Button
                  title="Domingo"
                  value="0"
                  text="D"
                  weekDays={weekDays}
                />
                <Button
                  title="Segunda"
                  value="1"
                  text="S"
                  weekDays={weekDays}
                />
                <Button title="Terça" value="2" text="T" weekDays={weekDays} />
                <Button title="Quarta" value="3" text="Q" weekDays={weekDays} />
                <Button title="Quinta" value="4" text="Q" weekDays={weekDays} />
                <Button title="Sexta" value="5" text="S" weekDays={weekDays} />
                <Button title="Sábado" value="6" text="S" weekDays={weekDays} />
              </ToggleGroup.Root>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor="hourStart">Qual o horário do dia?</label>
              <div className="flex justify-end gap-2">
                <Input
                  type="time"
                  name="hourStart"
                  id="hourStart"
                  placeholder="De"
                />
                <Input
                  type="time"
                  name="hourEnd"
                  id="hourEnd"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>
          <label className="mt-2 flex gap-2 text-sm items-center">
            <Checkbox.Root
              checked={useVoiceChannel}
              className="h-6 w-6 rounded bg-zinc-900"
              onCheckedChange={(checked) => {
                typeof checked === "boolean" && setUseVoiceChannel(checked);
              }}
            >
              <Checkbox.Indicator
                id="check"
                className="flex justify-center items-center"
              >
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>
          <footer className="mt-2 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-10 rounded-md font-semibold hover:bg-zinc-600 transition duration-150"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-10 rounded-md font-semibold flex items-center gap-2 hover:bg-violet-600 transition duration-150"
            >
              <GameController className="w-6 h-6" />
              Encontrar duo
            </button>
          </footer>
        </form>
        {/* </Dialog.Content> */}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
