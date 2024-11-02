export const snakeToTitleCase = (text: string | undefined | null): string => {
  if (!text) return ''

  return text
    .toLowerCase()
    .replace(/^_*(.)|_+(.)/g, (_s, c, d) =>
      c ? c.toUpperCase() : ' ' + d.toUpperCase(),
    )
}
