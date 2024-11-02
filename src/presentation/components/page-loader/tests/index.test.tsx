import { describe } from 'vitest'
import { mockJadeComponents } from '~/infra/mocks'
import { testSnapshots } from '~/tests/utils'
import * as states from './componentStates'

mockJadeComponents()

describe('PageLoader', (): void => {
  testSnapshots(states)
})
