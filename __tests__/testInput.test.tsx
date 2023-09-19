import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Form } from '@/components/organisms/Form'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
}))

describe('InputForm component', () => {
  test('Text box exist', () => {
    render(<Form emailDefaultValue="" nameDefaultValue="" passwordDefaultValue="" serviceDefaultValue="" />)

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

  test('Enter the email and click the button', async () => {
    render(<Form emailDefaultValue="email" />)

    const submitButton = screen.getByRole('button', { name: '送信' })

    await userEvent.click(submitButton)

    // const serviceErr = screen.queryByTestId('serviceError')
    const emailErr = screen.queryByTestId('emailError')
    // const nameErr = screen.queryByTestId('nameError')
    // const passwordErr = screen.queryByTestId('passwordError')

    // const errors = [serviceErr, emailErr, nameErr, passwordErr]
    const errors = [emailErr]

    errors.forEach((error) => {
      expect(error).toBeInTheDocument()
    })
  })
})
