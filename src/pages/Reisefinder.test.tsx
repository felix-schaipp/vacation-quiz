import { describe, test, screen } from '@/setupTests'
import { renderWithRouter } from '@/test-utils'
import { Reisefinder } from './Reisefinder'

describe('[PAGES] - Reisefinder', () => {
  test('renders first question', () => {
    renderWithRouter(<Reisefinder />)

    expect(
      screen.getByRole('heading', {
        name: /Frage 1/,
      }),
    ).toBeInTheDocument()
  })

  test('advances to next question', async () => {
    const { user } = renderWithRouter(<Reisefinder />)

    const firstAnswer = screen.getByRole('button', { name: 'Warm und sonnig' })
    await user.click(firstAnswer)

    expect(
      screen.getByRole('heading', {
        name: /Frage 2/,
      }),
    ).toBeInTheDocument()
  })
})
