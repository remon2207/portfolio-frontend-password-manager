import { TableHead } from '@/components/atoms/TableHead'

type Props = {
  service: string
  email: string
  name: string
  password: string
  twoFactor: string
  secret: string
}

export const TableHeaderFrame: React.FC<Props> = ({ service, email, name, password, twoFactor, secret }) => {
  return (
    <thead>
      <tr>
        <TableHead header={service} />
        <TableHead header={email} />
        <TableHead header={name} />
        <TableHead header={password} />
        <TableHead header={twoFactor} />
        <TableHead header={secret} />
      </tr>
    </thead>
  )
}
