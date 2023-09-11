import Link from 'next/link'

type Props = {
  className?: string
  href: string
  buttonName: string
}

export const Button: React.FC<Props> = ({ className, buttonName, href }) => {
  return (
    <Link className={className} href={href}>
      {buttonName}
    </Link>
  )
}
