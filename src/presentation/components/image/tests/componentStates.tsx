import type React from 'react'
import { Image } from '~/presentation/components'
import type { ImageProps } from '~/presentation/components/image/types'

const Container: React.FC<ImageProps> = ({ alt, height, source, width }) => (
  <Image alt={alt} height={height} source={source} width={width} />
)

const Default: React.FC = () => (
  <Container
    alt="alt"
    height={100}
    source="/assets/images/ton-logo.svg"
    width={100}
  />
)

const WithoutSource: React.FC = () => (
  <Container alt="alt" height={100} width={100} />
)

export { Default, WithoutSource }
