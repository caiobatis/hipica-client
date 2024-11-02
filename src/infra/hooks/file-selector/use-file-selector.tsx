import { useState } from 'react'
import { defaultExtensions } from '~/infra/hooks/file-selector/constants'
import type {
  FileTypes,
  SelectedFile,
  UseFileSelectorOptions,
  UseFileSelectorReturn,
} from './types'

export const useFileSelector = <T extends FileTypes>(
  options: UseFileSelectorOptions<T>,
): UseFileSelectorReturn => {
  const [selectedFile, setSelectedFile] = useState<SelectedFile | null>(null)
  const [errorTrigger, setErrorTrigger] = useState(false)

  const handleSelectFile = (file: File) => {
    const allowedExtensions =
      options?.extensions || defaultExtensions[options.type]
    const fileExtension = file.name.slice(file.name.lastIndexOf('.'))

    setErrorTrigger(!allowedExtensions.includes(fileExtension))

    const reader = new FileReader()
    reader.addEventListener('load', () =>
      setSelectedFile({
        name: file.name,
        type: file.type,
        size: file.size,
        content: reader.result,
      }),
    )
    reader.readAsDataURL(file)
  }

  const handleClearFile = () => setSelectedFile(null)

  const suggestedExtensions =
    options?.extensions || defaultExtensions[options.type]

  return {
    selectedFile: selectedFile || {
      name: '',
      type: '',
      size: 0,
      content: null,
    },
    errorTrigger,
    suggestedExtensions,
    handleSelectFile,
    handleClearFile,
  }
}
