type Props = {
  htmlFor: string
  className?: string
  labelName: string
}

export const Label: React.FC<Props> = ({ htmlFor, className, labelName }) => {
  return (
    <>
      <label className={className} htmlFor={htmlFor}>
        {labelName}
      </label>
    </>
  )
}
