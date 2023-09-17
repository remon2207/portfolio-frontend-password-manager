import { render, screen } from '@testing-library/react'

import { Header } from '@/components/organisms/Header'

describe('Header Component', () => {
  test('render 3 header buttons', async () => {
    render(<Header />)

    const buttonList = await screen.findAllByRole('link')
    expect(buttonList).toHaveLength(3)
  })

  test('create button name', () => {
    render(<Header />)

    const name = screen.getByText('新規作成')
    expect(name).toBeInTheDocument()
  })

  test('logout button name', () => {
    render(<Header />)

    const name = screen.getByText('ログアウト')
    expect(name).toBeInTheDocument()
  })

  test('header title', () => {
    render(<Header />)

    const title = screen.getByText('パスワード管理')
    expect(title).toBeInTheDocument()
  })
})
