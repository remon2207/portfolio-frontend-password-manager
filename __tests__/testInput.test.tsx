import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Form } from '@/components/organisms/Form'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('InputForm component', () => {
  test('Text box exist', () => {
    render(<Form />)

    const expectExec = (id: HTMLElement) => expect(id).toBeInTheDocument()

    const service = screen.getByTestId('service')
    const email = screen.getByTestId('email')
    const name = screen.getByTestId('name')
    const password = screen.getByTestId('password')
    const note = screen.getByTestId('note')
    const submitButton = screen.getByRole('button', { name: '送信' })

    expectExec(service)
    expectExec(email)
    expectExec(name)
    expectExec(password)
    expectExec(password)
    expectExec(note)
    expectExec(submitButton)
  })

  test('Form click', async () => {
    render(<Form />)

    const expectExec = (id: HTMLElement | null) => expect(id).not.toBeInTheDocument()

    const service = screen.getByTestId('service')
    const email = screen.getByTestId('email')
    const name = screen.getByTestId('name')
    const password = screen.getByTestId('password')
    const note = screen.getByTestId('note')
    const submitButton = screen.getByRole('button', { name: '送信' })

    await userEvent.type(service, 'service')
    await userEvent.type(email, 'email@gmail.com')
    await userEvent.type(name, 'name')
    await userEvent.type(password, 'password')
    await userEvent.type(note, 'note')
    await userEvent.click(submitButton)

    const serviceErr = screen.queryByTestId('serviceError')
    const emailErr = screen.queryByTestId('emailError')
    const nameErr = screen.queryByTestId('nameError')
    const passwordErr = screen.queryByTestId('passwordError')

    expectExec(serviceErr)
    expectExec(emailErr)
    expectExec(nameErr)
    expectExec(passwordErr)
  })
})
