import { useTheme } from 'styled-components'
import { PageTitle } from '~/presentation/components'
import type { DashboardContainerProps } from '~/presentation/pages/dashboard/types'
import { Flex, TitleSection } from '~/presentation/pages/dashboard/ui/styles'

export const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  const theme = useTheme()

  return (
    <div>
      <TitleSection>
        <PageTitle title="Resumo do estoque" />
      </TitleSection>

      <Flex style={{ gap: 24 }}>
        <p>ola</p>
      </Flex>
    </div>
  )
}
