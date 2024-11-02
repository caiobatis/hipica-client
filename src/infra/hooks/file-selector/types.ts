export type FileTypes = 'archive' | 'image' | 'document'

type ExtensionImage = '.jpeg' | '.jpg' | '.png' | '.gif'
type ExtensionDocument = '.pdf' | '.docx' | '.txt'
type ExtensionArchive = '.zip' | '.rar' | '.7z'

export type UseFileSelectorOptions<T extends FileTypes> = {
  type: T
  extensions?: {
    archive: Array<ExtensionArchive>
    image: Array<ExtensionImage>
    document: Array<ExtensionDocument>
  }[T]
}

export interface SelectedFile {
  name: string
  type: string
  size: number
  content: string | ArrayBuffer | null
}

export interface UseFileSelectorReturn {
  handleClearFile: () => void
  handleSelectFile: (file: File) => void
  selectedFile: SelectedFile
  suggestedExtensions: Array<string>
  errorTrigger: boolean
}
