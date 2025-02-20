export function formatUpdatedDate(isoString: string): string {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  return `Updated on ${date.toLocaleDateString('en-GB', options).replace(',', '')}`;
}
