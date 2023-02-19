import { describe, test, screen, expect, render } from '@/setupTests'
import { LoadingSpinner } from './LoadingSpinner'

describe('[COMPONENTS] - LoadingSpinner', () => {
  test('renders basic spinner', () => {
    render(<LoadingSpinner />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
