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
        <td data-testid="service">
          <Link className="break-all" href={`/edit?id=${id}`}>
            {service}
          </Link>
        </td>
        <td className="break-all" data-testid="email">
          {email}
        </td>
        <td className="break-all" data-testid="name">
          {name}
        </td>
        <td>
          <Input
            className="cell-input"
            onFocus={handleFocusAllSelect}
            readOnly
            size={5}
            testId="password"
            type="text"
            value={password}
          />
        </td>
        <td data-testid="twoFactor">{twoFactor}</td>
      </tr>
    </tbody>
  )
}
