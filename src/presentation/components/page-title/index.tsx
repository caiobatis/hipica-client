import { useLayoutEffect } from 'react'
import type { PageTitleProps } from '~/presentation/components/page-title/types'

export function PageTitle({ title }: PageTitleProps) {
  useLayoutEffect(() => {
    const previousTitle = document.title
    document.title = `${title} - ${previousTitle}`

    return () => {
      document.title = previousTitle
    }
  }, [title])

  return <p>{title}</p>
}
