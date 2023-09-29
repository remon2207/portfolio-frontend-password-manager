import Link from 'next/link'

type Props = {
  className?: string
  href: string
  linkName: string
  testId?: string
  onClick?: () => void
}

export const CustomLink: React.FC<Props> = ({ className, linkName, href, testId, onClick }) => {
  return (
    <Link className={className} data-testid={testId} href={href} onClick={onClick}>
      {linkName}
    </Link>
  )
}
