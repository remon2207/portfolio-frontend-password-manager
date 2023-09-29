import Link from 'next/link'

type Props = {
  className?: string
  title: string
  testId?: string
}

export const Title: React.FC<Props> = ({ className, title, testId }) => {
  return (
    <Link className={className} data-testid={testId} href="/">
      {title}
    </Link>
  )
}
