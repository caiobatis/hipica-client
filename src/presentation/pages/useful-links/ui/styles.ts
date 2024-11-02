import styled from 'styled-components'

export const Container = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
`

export const LinksCard = styled.div`
  gap: 1.5rem;
  width: 100%;
  display: flex;
  padding: 1.5rem;
  margin-top: 2rem;
  flex-direction: column;
  border-radius: ${({ theme }) => theme['corner-radius'].container};
  background-color: ${({ theme }) => theme.color.background['surface']};
`

export const ContentCard = styled.div`
  gap: 1.5rem;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
`

export const Anchor = styled.a`
  width: 322px;
  color: ${({ theme }) => theme.color.content['brand']};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
