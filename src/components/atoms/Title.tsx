import Link from 'next/link'

type Props = {
  className?: string
  title: string
}

export const Title: React.FC<Props> = ({ className, title }) => {
  return (
    <Link className={className} href="/">
      {title}
    </Link>
  )
}
