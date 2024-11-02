export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      resolve(reader.result as string)
    }

    reader.addEventListener('error', (error) => {
      reject(error)
    })

    reader.readAsDataURL(file)
  })
}
