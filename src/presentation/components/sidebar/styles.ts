import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.aside`
  border-right: 1px solid #ccc;
  background-color: #ccc;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 20px;
`

export const NavSection = styled(Section)`
  flex-grow: 1;
`

export const NavMenuLink = styled(NavLink)`
  text-decoration: none;
`
