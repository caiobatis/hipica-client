import Pica from 'pica'
import { useState } from 'react'
import { resizeOptions } from '~/infra/hooks/image-resizer/constants'
import {
  type ImageResizerOptions,
  type UseImageResizerReturn,
  ImageQuality,
} from './types'

/**
 * Hook to resize images
 * @returns an object with the onResize function, isLoading, isError and resizedImages states.
 * @example
 * const { onResize, isLoading, isError, resizedImages } = useImageResizer()
 * onResize({ id: '1', file: file, quality: 'MEDIUM', width: 800, height: 800 })
 * @description Quality can be LOW, MEDIUM or HIGHT.
 * @description Width and height are optional, if not informed, the original image value will be taken.
 * @description The id is the information that identifies the resized image, loaded, or errored.
 * @description The file is the file that will be resized.
 */

export const useImageResizer = (): UseImageResizerReturn => {
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})
  const [isError, setIsError] = useState<Record<string, boolean>>({})
  const [resizedImages, setResizedImages] = useState<
    Record<string, Blob | null>
  >({})

  const pica = Pica()

  const resize = async (options: ImageResizerOptions): Promise<void> => {
    const { id, file, width, height, quality } = options

    setIsLoading((previous) => ({ ...previous, [id]: true }))
    setIsError((previous) => ({ ...previous, [id]: false }))

    try {
      const img = document.createElement('img')
      img.src = URL.createObjectURL(file)
      await img.decode()

      const canvas = document.createElement('canvas')
      canvas.width = width || img.width
      canvas.height = height || img.height

      // Resize the image
      const resizedCanvas = await pica.resize(img, canvas, resizeOptions)

      // Convert the canvas to a Blob
      const blob = await pica.toBlob(
        resizedCanvas,
        file.type,
        ImageQuality[quality],
      )
      setResizedImages((previous) => ({ ...previous, [id]: blob }))
    } catch {
      setIsError((previous) => ({ ...previous, [id]: true }))
    } finally {
      setIsLoading((previous) => ({ ...previous, [id]: false }))
    }
  }

  return {
    onResize: resize,
    isLoading,
    isError,
    resizedImages,
  }
}
