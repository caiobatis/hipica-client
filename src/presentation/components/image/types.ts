import type { ImgHTMLAttributes } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt?: string
  title?: string
  source?: string
  width: number
  height: number
  fit?: 'cover' | 'contain' | 'fill'
  borderRadius?: 'container' | 'interactive'
}
