import { render, screen } from '@testing-library/react'

import { CellFrame } from '@/components/molecules/CellFrame'
import { TableHeaderFrame } from '@/components/molecules/TableHeaderFrame'

describe('Table Component', () => {
  test('Header exist in table', () => {
    render(
      <table>
        <TableHeaderFrame email="" name="" password="" service="" twoFactor="" />
      </table>
    )

    const service = screen.getByTestId('service')
    const email = screen.getByTestId('email')
    const name = screen.getByTestId('name')
    const password = screen.getByTestId('password')

    const headers = [service, email, name, password]

    headers.forEach((header) => expect(header).toBeInTheDocument())
  })

  test('service exist in the header', () => {
    render(
      <table>
        <TableHeaderFrame email="" name="" password="" service="サービス" twoFactor="" />
      </table>
    )

    const service = screen.getByTestId('service')

    expect(service).toHaveTextContent('サービス')
  })

  test('email exist in the header', () => {
    render(
      <table>
        <TableHeaderFrame email="メールアドレス" name="" password="" service="" twoFactor="" />
      </table>
    )

    const email = screen.getByTestId('email')

    expect(email).toHaveTextContent('メールアドレス')
  })

  test('name exist in the header', () => {
    render(
      <table>
        <TableHeaderFrame email="" name="名前" password="" service="" twoFactor="" />
      </table>
    )

    const name = screen.getByTestId('name')

    expect(name).toHaveTextContent('名前')
  })

  test('password exist in the header', () => {
    render(
      <table>
        <TableHeaderFrame email="" name="" password="パスワード" service="" twoFactor="" />
      </table>
    )

    const password = screen.getByTestId('password')

    expect(password).toHaveTextContent('パスワード')
  })

  test('twoFactor exist in the header', () => {
    render(
      <table>
        <TableHeaderFrame email="" name="" password="" service="" twoFactor="二段階認証の有無" />
      </table>
    )

    const twoFactor = screen.getByTestId('twoFactor')

    expect(twoFactor).toHaveTextContent('二段階認証の有無')
  })

  test('Header exist in table', () => {
    render(
      <table>
        <CellFrame email="" id={0} name="" password="" service="" twoFactor="" />
      </table>
    )

    const service = screen.getByTestId('service')
    const email = screen.getByTestId('email')
    const name = screen.getByTestId('name')
    const password = screen.getByTestId('password')
    const twoFactor = screen.getByTestId('twoFactor')

    const cells = [service, email, name, password, twoFactor]

    cells.forEach((cell) => expect(cell).toBeInTheDocument())
  })

  test('service exist in the cell', () => {
    render(
      <table>
        <CellFrame email="" id={0} name="" password="" service="サービス" twoFactor="" />
      </table>
    )

    const service = screen.getByTestId('service')

    expect(service).toHaveTextContent('サービス')
  })

  test('email exist in the cell', () => {
    render(
      <table>
        <CellFrame email="email@gmail.com" id={0} name="" password="" service="" twoFactor="" />
      </table>
    )

    const email = screen.getByTestId('email')

    expect(email).toHaveTextContent('email@gmail.com')
  })

  test('name exist in the cell', () => {
    render(
      <table>
        <CellFrame email="" id={0} name="name" password="" service="" twoFactor="" />
      </table>
    )

    const name = screen.getByTestId('name')

    expect(name).toHaveTextContent('name')
  })

  test('password exist in the cell', () => {
    render(
      <table>
        <CellFrame email="" id={0} name="" password="password" service="" twoFactor="" />
      </table>
    )

    const password = screen.getByTestId('password')

    expect(password).toHaveValue('password')
  })

  test('twoFactor exist in the cell', () => {
    render(
      <table>
        <CellFrame email="" id={0} name="" password="" service="" twoFactor="有" />
      </table>
    )

    const twoFactor = screen.getByTestId('twoFactor')

    expect(twoFactor).toHaveTextContent('有')
  })
})
