import { render, screen } from '@testing-library/react'

import { CreateForm } from '@/components/templates/CreateForm'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
}))

describe('InputForm component', () => {
  test('Text box exist', () => {
    // render(<Form emailDefaultValue="" nameDefaultValue="" passwordDefaultValue="" serviceDefaultValue="" />)
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
})
