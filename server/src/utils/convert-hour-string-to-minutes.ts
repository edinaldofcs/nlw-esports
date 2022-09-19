// "18:00" -> ["18", "00"] -> [18,0]

export function convertHourStringToMinutes(fullTime: string) {
  const [hours, minutes] = fullTime.split(":").map(Number);
  const minutesAmout = hours * 60 + minutes;

  return minutesAmout;
}
