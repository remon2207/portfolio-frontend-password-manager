import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputForm } from '@/components/molecules/InputForm'

describe('InputForm Component', () => {
  test('label exist in InputForm component', () => {
    render(<InputForm htmlFor="test" labelName="test" type="text" />)

    const label = screen.getByTestId('label')

    expect(label).toBeInTheDocument()
  })

  test('Input exist in InputForm component', () => {
    render(<InputForm htmlFor="test" labelName="test" type="text" />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })

  test('Enter input in input box', async () => {
    render(<InputForm htmlFor="test" labelName="test" type="text" />)

    const input = screen.getByRole('textbox')

    await userEvent.type(input, 'test')

    expect(input).toHaveValue('test')
  })
})
