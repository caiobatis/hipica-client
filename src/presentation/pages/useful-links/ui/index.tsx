import { Icon, PageTitle } from '~/presentation/components'
import type { UsefulLinksContainerProps } from '~/presentation/pages/useful-links/types'
import { Anchor, Container, ContentCard, LinksCard } from './styles'

export const UsefulLinksContainer: React.FC<UsefulLinksContainerProps> = ({
  usefulLinks,
}) => {
  const renderContent = (): React.ReactElement => (
    <LinksCard id="utils-links">
      <p>CONTEÚDOS PARA TE AJUDAR COMO PARCEIRO</p>

      <ContentCard>
        {usefulLinks.map((link, index) => (
          <Anchor key={index} href={link.url} target="_blank">
            <p>{link.label}</p>
            <Icon size="small" use="arrow-north-east" color="brand" />
          </Anchor>
        ))}
      </ContentCard>
    </LinksCard>
  )

  return (
    <Container>
      <PageTitle title="Links úteis" />
      {renderContent()}
    </Container>
  )
}
