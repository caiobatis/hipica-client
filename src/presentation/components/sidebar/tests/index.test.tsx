import { describe, vi } from 'vitest'
import { mockJadeComponents } from '~/infra/mocks'
import { testSnapshots } from '~/tests/utils'
import * as states from './componentStates'

mockJadeComponents()

vi.mock('react-router-dom', () => {
  return {
    NavLink: (): JSX.Element => {
      return <></>
    },
  }
})

describe('Sidebar', (): void => {
  testSnapshots(states)
})
