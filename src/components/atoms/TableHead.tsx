type Props = {
  header: string
  className?: string
}

export const TableHead: React.FC<Props> = ({ header, className }) => {
  return (
    <>
      <th className={className}>{header}</th>
    </>
  )
}
