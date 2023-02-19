import { describe, test, screen, expect } from '@/setupTests'
import { Navbar } from './Navbar'
import { renderWithRouter } from '@/test-utils'

describe('[COMPONENTS] - Navbar', () => {
  test('renders basic layout', () => {
    renderWithRouter(<Navbar />)

    expect(
      screen.getByRole('button', { name: 'Open main menu' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAccessibleName('profile picture')
    const [root, destinationFinder] = screen.getAllByRole('link')
    expect(root).toBeInTheDocument()
    expect(destinationFinder).toHaveTextContent('Reisefinder')
  })
})
