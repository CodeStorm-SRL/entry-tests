export function formatStringDate(date: string): string {
  const formattedDate = new Intl.DateTimeFormat("en-EN", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(new Date(date));

  const dayInt = +formattedDate.split("/")[0];

  return dayInt < 10 ? "0" + formattedDate : formattedDate;
}
