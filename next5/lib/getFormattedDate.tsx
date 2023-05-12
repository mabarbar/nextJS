export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("pl-EU", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
