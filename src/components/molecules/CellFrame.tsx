'use client'

import Link from 'next/link'

import { Input } from '@/components/atoms/Input'

type Props = {
  id: number | undefined
  service: string
  email: string
  name: string
  password: string
  twoFactor: string
}

export const CellFrame: React.FC<Props> = ({ id, service, email, name, password, twoFactor }) => {
  const handleFocusAllSelect = (e: React.FocusEvent<HTMLInputElement>) => e.target.select()

  return (
    <tbody>
      <tr className="hover">
        <td>
          <Link className="break-all" href={`/edit?id=${id}`}>
            {service}
          </Link>
        </td>
        <td className="break-all">{email}</td>
        <td className="break-all">{name}</td>
        <td>
          <Input className="cell-input" onFocus={handleFocusAllSelect} readOnly size={5} type="text" value={password} />
        </td>
        <td>{twoFactor}</td>
      </tr>
    </tbody>
  )
}
