import { render, screen } from '@testing-library/react'
import { CustomLink } from '@/components/atoms/CustomLink'
import { Title } from '@/components/atoms/Title'

describe('Header Component', () => {
  test('CreateButton exist in header component', () => {
    render(<CustomLink href="" linkName="" testId="createButton" />)

    const createButton = screen.getByTestId('createButton')

    expect(createButton).toBeInTheDocument()
  })

  test('Title exist in header component', () => {
    render(<Title testId="title" title="" />)

    const title = screen.getByTestId('title')

    expect(title).toBeInTheDocument()
  })

  test('Signin or signout button exist in header component', () => {
    render(<CustomLink href="" linkName="" testId="signoutButton" />)

    const button = screen.getByTestId('signoutButton')

    expect(button).toBeInTheDocument()
  })

  test('Create button text name exist', () => {
    render(<CustomLink href="" linkName="新規作成" testId="createButton" />)

    const button = screen.getByTestId('createButton')

    expect(button).toHaveTextContent('新規作成')
  })

  test('Title exist', () => {
    render(<Title testId="title" title="パスワード管理" />)

    const title = screen.getByTestId('title')

    expect(title).toHaveTextContent('パスワード管理')
  })

  test('Signout button text name exist', () => {
    render(<CustomLink href="" linkName="サインアウト" testId="signoutButton" />)

    const button = screen.getByTestId('signoutButton')

    expect(button).toHaveTextContent('サインアウト')
  })

  test('Signin button text name exist', () => {
    render(<CustomLink href="" linkName="サインイン" testId="signinButton" />)

    const button = screen.getByTestId('signinButton')

    expect(button).toHaveTextContent('サインイン')
  })
})
