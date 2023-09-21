type Props = {
  header: string
  className?: string
  testId?: string
}

export const TableHead: React.FC<Props> = ({ header, className, testId }) => {
  return (
    <>
      <th className={className} data-testid={testId}>
        {header}
      </th>
    </>
  )
}
