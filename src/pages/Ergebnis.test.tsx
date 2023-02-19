import { describe, test, screen, act } from '@/setupTests'
import { renderWithRouter } from '@/test-utils'
import { vi } from 'vitest'
import { Ergebnis } from './Ergebnis'

vi.mock('react-router-dom', async () => {
  const actualRouter = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom',
  )
  return {
    ...actualRouter,
    useLocation: vi
      .fn()
      .mockReturnValue({ state: { madeira: 5, kopenhagen: 3, portugal: 2 } }),
  }
})

describe('[PAGES] - Ergebnis', () => {
  afterEach(() => {
    vi.clearAllTimers()
  })
  test('shows calculating loader', () => {
    renderWithRouter(<Ergebnis />)

    expect(
      screen.getByRole('heading', { name: 'Ergebnis' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
  test('shows result with one winner', async () => {
    vi.useFakeTimers()
    renderWithRouter(<Ergebnis />)

    await act(async () => {
      vi.runAllTimers()
    })

    expect(
      screen.getByRole('heading', { name: 'Platz 1: Madeira' }),
    ).toBeInTheDocument()
  })
  test('shows second and third place', async () => {
    vi.useFakeTimers()
    renderWithRouter(<Ergebnis />)

    await act(async () => {
      vi.runAllTimers()
    })

    expect(
      screen.getByRole('heading', { name: 'Platz 2: Kopenhagen' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Platz 3: Portugal' }),
    ).toBeInTheDocument()
  })
})
