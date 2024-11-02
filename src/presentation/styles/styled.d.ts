import 'styled-components'

export type ITheme = typeof jade.theme

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
