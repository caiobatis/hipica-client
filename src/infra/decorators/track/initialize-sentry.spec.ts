import { describe, expect, it, vi } from 'vitest'
import { initializeSentry } from '~/infra/decorators/track'

const mockSentry = vi.hoisted(() => {
  return {
    init: vi.fn(),
    replayIntegration: vi.fn(),
    reactRouterV6BrowserTracingIntegration: vi.fn(),
  }
})

vi.mock('@sentry/react', () => {
  return mockSentry
})

describe('initializeSentry', () => {
  it('should initialize sentry', () => {
    initializeSentry()

    expect(mockSentry.init).toHaveBeenCalled()
    expect(mockSentry.replayIntegration).toHaveBeenCalled()
    expect(mockSentry.reactRouterV6BrowserTracingIntegration).toHaveBeenCalled()
  })
})
