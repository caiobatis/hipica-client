import type { FileTypes } from './types'

export const defaultExtensions: Record<FileTypes, Array<string>> = {
  archive: ['.zip', '.rar', '.7z'],
  image: ['.jpeg', '.jpg', '.png', '.gif'],
  document: ['.pdf', '.docx', '.txt'],
}
