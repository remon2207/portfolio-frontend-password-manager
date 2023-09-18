import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { InputForm } from '@/components/molecules/InputForm'
import { Form } from '@/components/organisms/Form'

const push = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => {
    return {
      push,
    }
  },
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

    const service = screen.getByTestId('service')
    const email = screen.getByTestId('email')
    const name = screen.getByTestId('name')
    const password = screen.getByTestId('password')
    const secret = screen.getByTestId('note')
    const submitButton = screen.getByText('送信')

    userEvent.type(service, 'service')
    userEvent.type(email, 'email@gmail.com')
    userEvent.type(name, 'name')
    userEvent.type(password, 'password')
    userEvent.type(secret, 'note')
    userEvent.click(submitButton)

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toBeCalledWith('/')
  })
})
