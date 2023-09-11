type Props = {
  service: string
  email: string
  name: string
  password: string
  twoFactor: string
  secret: string
}

export const CellFrame: React.FC<Props> = ({ service, email, name, password, twoFactor, secret }) => {
  return (
    <tbody>
      <tr className="hover">
        {/* <Cell name={name} /> */}
        <td>{service}</td>
        <td>{email}</td>
        <td>{name}</td>
        <td>{password}</td>
        <td>{twoFactor}</td>
        <td>{secret}</td>
      </tr>
    </tbody>
  )
}
