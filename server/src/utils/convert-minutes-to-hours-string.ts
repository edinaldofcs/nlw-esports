// 720 -> "12:00"

export function convertMinutesToHoursString(fullTime: number): string {
  return `${String(Math.floor(fullTime / 60)).padStart(2, "0")}:${String(
    fullTime % 60
  ).padStart(2, "0")}`;
}
