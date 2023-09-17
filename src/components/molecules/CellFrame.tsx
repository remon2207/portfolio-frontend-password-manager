'use client'

import Link from 'next/link'

import { Input } from '@/components/atoms/Input'

type Props = {
  service: string
  email: string
  name: string
  password: string
  twoFactor: string
  note: string
}

export const CellFrame: React.FC<Props> = ({ service, email, name, password, twoFactor, note }) => {
  const handleFocusAllSelect = (e: React.FocusEvent<HTMLInputElement>) => e.target.select()
  return (
    <tbody>
      <tr className="hover">
        <td>
          <Link className="break-all" href="/edit">
            {service}
          </Link>
        </td>
        <td className="break-all">{email}</td>
        <td className="break-all">{name}</td>
        <td>
          <Input className="cell-input" onFocus={handleFocusAllSelect} readOnly size={5} type="text" value={password} />
        </td>
        <td>{twoFactor}</td>
        <td>
          <Input className="cell-input" onFocus={handleFocusAllSelect} readOnly size={5} type="text" value={note} />
        </td>
      </tr>
    </tbody>
  )
}
