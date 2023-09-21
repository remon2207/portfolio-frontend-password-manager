import Link from 'next/link'

type Props = {
  className?: string
  href: string
  linkName: string
  testId?: string
}

export const CustomLink: React.FC<Props> = ({ className, linkName, href, testId }) => {
  return (
    <>
      <Link className={className} data-testid={testId} href={href}>
        {linkName}
      </Link>
    </>
  )
}
