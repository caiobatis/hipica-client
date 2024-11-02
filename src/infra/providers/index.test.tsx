import { QueryClientProvider } from '@tanstack/react-query'
import { Fragment } from 'react'
import { RouterProvider } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import Providers from '~/infra/providers'
import { ModalProvider } from '~/infra/providers/modal'
import { ToastProvider } from '~/infra/providers/toast'
import { render, type RenderResult } from '~/tests'

const routerMock = vi.hoisted(() => ({
  routeName: 'route',
}))

vi.mock('~/routes/router', () => {
  return {
    router: routerMock,
  }
})

vi.mock('~/infra/providers/modal', () => ({
  ModalProvider: vi.fn(),
}))

vi.mock('~/infra/providers/toast', () => ({
  ToastProvider: vi.fn(),
}))

vi.mock('~/infra/providers/theme', () => {
  return {
    StyledThemeProvider: vi.fn(({ children }) => (
      <Fragment>{children}</Fragment>
    )),
  }
})

vi.mock('@tanstack/react-query', () => {
  return {
    QueryClient: vi.fn(),
    QueryClientProvider: vi.fn(({ children }) => children),
  }
})

vi.mock('react-router-dom', () => {
  return {
    RouterProvider: vi.fn(),
  }
})

describe('providers', () => {
  let component: RenderResult

  it('should render google repactcha provider', () => {
    component = render(<Providers />)

    expect(GoogleReCaptchaProvider).toHaveBeenCalled()
  })

  it('should render query client provider', () => {
    component = render(<Providers />)

    expect(QueryClientProvider).toHaveBeenCalled()
  })

  it('should render modal provider', () => {
    component = render(<Providers />)

    expect(ModalProvider).toHaveBeenCalled()
  })

  it('should render toast provider', () => {
    component = render(<Providers />)

    expect(ToastProvider).toHaveBeenCalled()
  })

  it('should render theme provider', () => {
    component = render(<Providers />)

    expect(RouterProvider).toHaveBeenCalled()
  })

  it('should render window provider', () => {
    component = render(<Providers />)

    expect(WindowRecaptcha).toHaveBeenCalled()
  })

  it('should render router provider with routes', () => {
    component = render(<Providers />)

    expect(RouterProvider).toHaveBeenCalled()
    expect(RouterProvider).toHaveBeenCalledWith({ router: routerMock }, {})
  })

  it('should render main div', () => {
    component = render(<Providers />)

    const element = component.getByRole('main')

    const classNames = [...(element?.classList ?? [])]

    expect(classNames).toContain('jade')
    expect(classNames).toContain('ton-legacy')
  })
})
