import { render, screen } from '@testing-library/react'

import { Header } from '@/components/organisms/Header'

describe('Header Component', () => {
  test('createButton exist in Header component', () => {
    render(<Header />)

    const createButton = screen.getByTestId('createButton')

    expect(createButton).toBeInTheDocument()
  })

  test('title exist in Header component', () => {
    render(<Header />)

    const title = screen.getByTestId('title')

    expect(title).toBeInTheDocument()
  })

  test('signoutButton exist in Header component', () => {
    render(<Header />)

    const signoutButton = screen.getByTestId('signoutButton')

    expect(signoutButton).toBeInTheDocument()
  })

  test('create button name', () => {
    render(<Header />)

    const createButton = screen.getByTestId('createButton')
    expect(createButton).toHaveTextContent('新規作成')
  })

  test('logout button name', () => {
    render(<Header />)

    const title = screen.getByTestId('title')
    expect(title).toHaveTextContent('パスワード管理')
  })

  test('header title', () => {
    render(<Header />)

    const signoutButton = screen.getByTestId('signoutButton')
    expect(signoutButton).toHaveTextContent('ログアウト')
  })
})
