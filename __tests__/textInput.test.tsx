import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Form } from '@/components/organisms/Form'
import { CreateForm } from '@/components/templates/CreateForm'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
}))

describe('InputForm component', () => {
  test('Text box exist', () => {
    render(<CreateForm />)

    const service = screen.getByTestId('service')
    const email = screen.getByTestId('email')
    const name = screen.getByTestId('name')
    const password = screen.getByTestId('password')
    const submitButton = screen.getByRole('button', { name: '送信' })

    const elems = [service, email, name, password, submitButton]

    elems.forEach((elem) => {
      expect(elem).toBeInTheDocument()
    })
  })

  test('Enter the form and click the button', async () => {
    render(<Form />)
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
