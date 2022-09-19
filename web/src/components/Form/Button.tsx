import * as ToggleGroup from "@radix-ui/react-toggle-group";

type Props = {
  title: string;
  text: string;
  value: string;
  weekDays: string[];
};

export function Button({ title, text, value, weekDays }: Props) {
  return (
    <ToggleGroup.Item
      value={value}
      title={title}
      className={`w-6 h-6 rounded  hover:bg-zinc-600 transition duration-150 ${weekDays.includes(value) ? "bg-violet-600" : "bg-zinc-900  "}`}
    >
      {text}
    </ToggleGroup.Item>
  );
}
