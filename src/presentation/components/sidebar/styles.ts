import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.aside`
  border-right: 1px solid ${({ theme }) => theme.color.border.low};
  background-color: ${({ theme }) => theme.color.background.surface};
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: ${({ theme }) => theme.container['padding-x'].medium};
`

export const NavSection = styled(Section)`
  flex-grow: 1;
`

export const NavMenuLink = styled(NavLink)`
  text-decoration: none;
`
