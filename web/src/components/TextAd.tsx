export function TextAd(props: {
  text: string;
  title: string;
  classBoolean?: string;
}) {
  return (
    <p>
      {props.title}{" "}
      <span
        className={`bg-zinc-700 py-1 px-2 text-white rounded-full ${
          props.classBoolean == "sim"
            ? "text-green-500"
            : props.classBoolean == "não"
            ? "text-red-500"
            : ""
        }`}
      >
        {props.text}
      </span>
    </p>
  );
}
