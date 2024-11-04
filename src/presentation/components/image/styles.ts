import styled from 'styled-components'

export const FallBack = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  > p {
    font-size: calc(${({ width }) => width}px / 6) !important;
  }
`

export const ImageStyled = styled.img<{
  $fit?: 'cover' | 'contain' | 'fill'
  $borderRadius?: 'container' | 'interactive'
}>`
  object-fit: ${({ $fit }) => $fit || 'contain'};
`
