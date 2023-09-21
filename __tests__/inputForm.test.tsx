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

  test('Enter the service and click the button', async () => {
    render(<Form id={0} />)

    const service = screen.getByTestId('service')

    await userEvent.type(service, 'service')

    const serviceErr = screen.queryByTestId('serviceError')

    expect(serviceErr).not.toBeInTheDocument()
  })

  test('Enter the email and click the button', async () => {
    render(<Form id={0} />)

    const email = screen.getByTestId('email')

    await userEvent.type(email, 'email@gmail.com')

    const emailErr = screen.queryByTestId('emailError')

    expect(emailErr).not.toBeInTheDocument()
  })

  test('Enter the name and click the button', async () => {
    render(<Form id={0} />)

    const name = screen.getByTestId('name')

    await userEvent.type(name, 'name')

    const nameErr = screen.queryByTestId('nameError')

    expect(nameErr).not.toBeInTheDocument()
  })

  test('Enter the password and click the button', async () => {
    render(<Form id={0} />)

    const password = screen.getByTestId('password')

    await userEvent.type(password, 'password')

    const passwordErr = screen.queryByTestId('passwordError')

    expect(passwordErr).not.toBeInTheDocument()
  })
})
