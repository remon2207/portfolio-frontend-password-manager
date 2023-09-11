import { render, screen } from '@testing-library/react'
import { Header } from '@/components/organisms/Header'

describe('Header Component', () => {
  test('render 3 header buttons', async () => {
    render(<Header />)

    const buttonList = await screen.findAllByRole('link')
    expect(buttonList).toHaveLength(3)
  })
})
