import { useCallback, useEffect, useState } from 'react'
import { testProps } from '~/tests/testProps'
import { FallBack, ImageStyled } from './styles'
import type { ImageProps } from './types'

/**
 * The props for the Image component.
 * @param width the width of the image.
 * @param height the height of the image.
 * @param source the source of the image.
 * @param fit the fit of the image. Can be cover or contain.
 * @param borderRadius the border radius of the image. Can be container or interactive. Container is 8px and interactive is 4px.
 * @param rest the rest of the props for the image. Ex.: data-testid, className, etc.
 * @returns an image component.
 * @example
 * <Image width="100px" height="100px" source="https://example.com/image.png" />
 */

export function Image({
  width,
  source,
  height,
  fit,
  borderRadius,
  ...props
}: ImageProps) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [source])

  const onError = useCallback(() => {
    setError(true)
  }, [])

  return (
    <>
      {error || !source ? (
        <FallBack
          width={width}
          height={height}
          {...testProps('component-fallback')}
        >
          <p>
            {width} x {height}
          </p>
        </FallBack>
      ) : (
        <ImageStyled
          width={width}
          height={height}
          src={source}
          onError={onError}
          role="img"
          $fit={fit}
          $borderRadius={borderRadius}
          {...props}
        />
      )}
    </>
  )
}

export default Image
