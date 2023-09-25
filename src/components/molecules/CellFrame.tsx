'use client'

import Link from 'next/link'
import { useState } from 'react'
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
  const [isOpen, setIsOpen] = useState(false)

  const handleClickCopy = () => {
    navigator.clipboard.writeText(password)
    setIsOpen(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 2000)
  }

  return (
    <tbody>
      <tr>
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
            onClick={handleClickCopy}
            readOnly
            size={5}
            testId="password"
            type="text"
            value={password}
          />
          {isOpen && <span className="block py-2">(コピーしました)</span>}
        </td>
        <td data-testid="twoFactor">{twoFactor}</td>
      </tr>
    </tbody>
  )
}
