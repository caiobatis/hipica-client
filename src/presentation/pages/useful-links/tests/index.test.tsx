import { describe, expect, it } from 'vitest'
import { render, type RenderResult } from '~/tests'
import { Component } from '..'

const makeSut = () => {
  return render(<Component />)
}

describe('UsefulLinksPage', (): void => {
  let component: RenderResult

  it('should render correctly', (): void => {
    component = makeSut()

    expect(component.container).toBeInTheDocument()
  })

  it('links should open in new tab', (): void => {
    component = makeSut()

    const links = component.container.querySelectorAll('a')

    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
