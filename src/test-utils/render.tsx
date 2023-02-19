import { render } from '@/setupTests'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

export const renderWithRouter = (
  component: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  { route = '/' } = {},
) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(component, { wrapper: BrowserRouter }),
  }
}

export const renderWithMemoryRouter = (
  component: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  { route = '/' } = {},
) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(<MemoryRouter initialEntries={[route]}>
        {component}
      </MemoryRouter>
    ),
  }
}
