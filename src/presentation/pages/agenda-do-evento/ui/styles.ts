import styled from 'styled-components'

export const TitleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const Space = styled.div<{ height?: number; width?: number }>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`

export const Flex = styled.div<{
  align?: string
  justify?: string
}>`
  display: flex;
  flex-direction: row;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`
