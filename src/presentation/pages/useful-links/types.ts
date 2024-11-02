export interface PageProps {}

export interface LinkItem {
  label: string
  url: string
  order: number
}

export interface UsefulLinksContainerProps {
  usefulLinks: Array<LinkItem>
}
