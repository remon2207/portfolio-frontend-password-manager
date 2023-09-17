'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useAtom } from 'jotai'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormButton } from '@/components/molecules/FormButton'
import { InputForm } from '@/components/molecules/InputForm'
import { passwordData } from '@/jotai/atoms'
import { Passwords } from '@/types/signals'
import { schema } from '@/utils/YupSchema'

export const Form: React.FC = () => {
  const [pwData, setPwData] = useAtom(passwordData)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      service: pwData.service,
      email: pwData.email,
      name: pwData.name,
      password: pwData.password,
      twoFactor: pwData.twoFactor,
      note: pwData.note,
    },
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<Passwords> = ({ service, email, name, password, twoFactor, note }) => {
    setPwData({
      service,
      email,
      name,
      password,
      twoFactor,
      note,
    })
  }

  return (
    <>
      <form action="/" className="mx-auto mt-10 flex w-96 flex-col" onSubmit={handleSubmit(onSubmit)}>
        {errors.service?.message && <span className="form-span">{errors.service?.message}</span>}
        <InputForm
          className="input-form"
          htmlFor="service"
          id="service"
          labelName="サービス"
          register={register('service')}
          testId="service"
          type="text"
        />
        {errors.email?.message && <span className="form-span left-1 top-60">{errors.email?.message}</span>}
        <InputForm
          className="input-form"
          htmlFor="email"
          id="email"
          labelName="メールアドレス"
          register={register('email')}
          testId="email"
          type="email"
        />
        {errors.name?.message && <span className="form-span top-[22.5rem]">{errors.name?.message}</span>}
        <InputForm
          className="input-form"
          htmlFor="name"
          id="name"
          labelName="名前"
          register={register('name')}
          testId="name"
          type="text"
        />
        {errors.password?.message && <span className="form-span top-[30rem]">{errors.password?.message}</span>}
        <InputForm
          className="input-form"
          htmlFor="password"
          id="password"
          labelName="パスワード"
          register={register('password')}
          testId="password"
          type="text"
        />
        <div className="mb-4 flex justify-center">
          <InputForm
            className="checkbox mr-20"
            htmlFor="twoFactor"
            id="twoFactor"
            labelName="2段階認証の有無"
            register={register('twoFactor')}
            testId="twoFactor"
            type="checkbox"
          />
        </div>
        <InputForm
          className="input-form"
          htmlFor="note"
          id="note"
          labelName="メモ"
          register={register('note')}
          testId="note"
          type="text"
        />
        <FormButton />
      </form>
    </>
  )
}
