import { render, screen } from 'utils/testRender'

import { Hello } from './index'

describe('<Hello />', () => {
  it('should render the heading', () => {
    const { container } = render(<Hello />)

    expect(screen.getByRole('heading', { name: /Hello/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the heading with blue color', () => {
    render(<Hello />)

    expect(screen.getByRole('heading', { name: /Hello/i })).toHaveStyleRule('color', 'blue')
  })
})
