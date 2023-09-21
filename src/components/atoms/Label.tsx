type Props = {
  htmlFor: string
  className?: string
  labelName: string
  testId?: string
}

export const Label: React.FC<Props> = ({ htmlFor, className, labelName, testId }) => {
  return (
    <>
      <label className={className} data-testid={testId} htmlFor={htmlFor}>
        {labelName}
      </label>
    </>
  )
}
