import { TableHead } from '@/components/atoms/TableHead'

type Props = {
  service: string
  email: string
  name: string
  password: string
  twoFactor: string
}

export const TableHeaderFrame: React.FC<Props> = ({ service, email, name, password, twoFactor }) => {
  return (
    <thead>
      <tr>
        <TableHead className="break-all" header={service} />
        <TableHead className="break-all" header={email} />
        <TableHead className="break-all" header={name} />
        <TableHead className="break-all" header={password} />
        <TableHead className="whitespace-normal break-all" header={twoFactor} />
      </tr>
    </thead>
  )
}
