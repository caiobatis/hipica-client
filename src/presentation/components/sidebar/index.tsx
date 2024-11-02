import { Divider } from '~/presentation/components/divider'
import { Container, NavMenuLink, NavSection, Section } from './styles'
import type { SidebarProps } from './types'

export function Sidebar({
  menus,
  footerComponent,
  headerComponent,
  ...props
}: SidebarProps) {
  return (
    <Container aria-label="Sidebar" role="menubar" {...props}>
      {headerComponent && <Section>{headerComponent}</Section>}

      <Divider />

      <NavSection role="navigation">
        {menus.map((menu, index) => (
          <NavMenuLink to={menu.linkTo} key={index}>
            {({ isActive }) => <p>{menu.label}</p>}
          </NavMenuLink>
        ))}
      </NavSection>

      {footerComponent && <Section>{footerComponent}</Section>}
    </Container>
  )
}
