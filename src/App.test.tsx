import { describe, test, screen, expect } from '@/setupTests'
import { App } from './App'
import { renderWithMemoryRouter, renderWithRouter } from '@/test-utils'

describe('App', () => {
  test('renders welcome page on root', () => {
    renderWithMemoryRouter(<App />)

    expect(
      screen.getByRole('heading', { name: 'Willkommen' }),
    ).toBeInTheDocument()
  })

  test(`navigates to destination finder on click on "Reisefinder"`, async () => {
    const { user } = renderWithRouter(<App />)

    await user.click(screen.getByRole('link', { name: 'Reisefinder' }))

    expect(
      screen.getByRole('heading', { name: 'Reiseziel Finder' }),
    ).toBeInTheDocument()
  })
})
