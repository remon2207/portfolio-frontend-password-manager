'use client'

import { UseFormRegisterReturn } from 'react-hook-form'
import { Input } from '@/components/atoms/Input'
import { Label } from '@/components/atoms/Label'

type Props = React.ComponentPropsWithoutRef<'input'> & {
  htmlFor: string
  labelName: string
  testId?: string
  register?: UseFormRegisterReturn
}

export const InputForm: React.FC<Props> = ({
  id,
  type,
  htmlFor,
  labelName,
  readOnly,
  testId,
  className,
  register,
  defaultValue,
  onClick,
}) => {
  return (
    <>
      <Label className="mx-auto mb-2" htmlFor={htmlFor} labelName={labelName} testId="label" />
      <Input
        className={className}
        defaultValue={defaultValue}
        id={id}
        onClick={onClick}
        readOnly={readOnly}
        testId={testId}
        type={type}
        {...register}
      />
    </>
  )
}
