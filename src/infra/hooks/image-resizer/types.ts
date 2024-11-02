export enum ImageQuality {
  LOW = 0.3,
  MEDIUM = 0.6,
  HIGHT = 0.9,
}

export type ImageQualityKey = keyof typeof ImageQuality

export interface ImageResizerOptions {
  id: string
  file: File
  quality: ImageQualityKey
  width?: number
  height?: number
}

export interface UseImageResizerReturn {
  onResize: (options: ImageResizerOptions) => Promise<void>
  isLoading: Record<string, boolean>
  isError: Record<string, boolean>
  resizedImages: Record<string, Blob | null>
}
