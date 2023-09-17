import Link from 'next/link'

type Props = {
  className?: string
  href: string
  linkName: string
}

export const CustomLink: React.FC<Props> = ({ className, linkName, href }) => {
  return (
    <>
      <Link className={className} href={href}>
        {linkName}
      </Link>
    </>
  )
}
