type Props = {
  header: string
}

export const TableHead: React.FC<Props> = ({ header }) => {
  return (
    <>
      <th>{header}</th>
    </>
  )
}
