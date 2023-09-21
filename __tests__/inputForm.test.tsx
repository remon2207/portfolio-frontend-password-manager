import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputForm } from '@/components/molecules/InputForm'
import { Form } from '@/components/organisms/Form'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
}))

describe('InputForm Component', () => {
  test('label exist in InputForm component', () => {
    render(<InputForm htmlFor="test" labelName="test" type="text" />)

    const label = screen.getByTestId('label')

    expect(label).toBeInTheDocument()
  })

  test('Input exist in InputForm component', () => {
    render(<InputForm htmlFor="" labelName="" type="text" />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })

  test('Checkbox exist in InputForm component', () => {
    render(<InputForm htmlFor="" labelName="" type="checkbox" />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()
  })

  test('Enter input in input box', async () => {
    render(<InputForm htmlFor="" labelName="" type="text" />)

    const input = screen.getByRole('textbox')

    await userEvent.type(input, 'test')

    expect(input).toHaveValue('test')
  })

  test('Checkbox is true', async () => {
    render(<InputForm htmlFor="" labelName="" type="checkbox" />)

    const checkbox = screen.getByRole('checkbox')

    await userEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  test('Enter the form and click the button', async () => {
    render(<Form id={0} />)
    const service = screen.getByTestId('service')
    const email = screen.getByTestId('email')
    const name = screen.getByTestId('name')
    const password = screen.getByTestId('password')

    await userEvent.type(service, 'service')
    await userEvent.type(email, 'email@gmail.com')
    await userEvent.type(name, 'name')
    await userEvent.type(password, 'password')

    const serviceErr = screen.queryByTestId('serviceError')
    const emailErr = screen.queryByTestId('emailError')
    const nameErr = screen.queryByTestId('nameError')
    const passwordErr = screen.queryByTestId('passwordError')

    const errors = [serviceErr, emailErr, nameErr, passwordErr]

    errors.forEach((error) => {
      expect(error).not.toBeInTheDocument()
    })
  })
})
