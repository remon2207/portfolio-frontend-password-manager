import { UseFormRegisterReturn } from 'react-hook-form'

import { Input } from '@/components/atoms/Input'
import { Label } from '@/components/atoms/Label'

type Props = {
  id?: string
  type: React.HTMLInputTypeAttribute
  htmlFor: string
  className?: string
  labelName: string
  readOnly?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  testId?: string
  register?: UseFormRegisterReturn
}

export const InputForm: React.FC<Props> = ({
  id,
  type,
  htmlFor,
  labelName,
  readOnly,
  onChange,
  testId,
  className,
  register,
}) => {
  return (
    <>
      <Label className="mx-auto mb-2" htmlFor={htmlFor} labelName={labelName} />
      <Input
        className={className}
        id={id}
        onChange={onChange}
        readOnly={readOnly}
        testId={testId}
        type={type}
        {...register}
      />
    </>
  )
}
