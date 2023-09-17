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
    render(<InputForm htmlFor="test" id="test" labelName="test" readOnly type="text" />)

    const box = screen.getByLabelText('test')

    expect(box).toBeInTheDocument()
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
