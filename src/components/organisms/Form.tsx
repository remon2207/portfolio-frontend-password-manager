'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormButton } from '@/components/molecules/FormButton'
import { InputForm } from '@/components/molecules/InputForm'
import { Passwords } from '@/types/signals'
import { schema } from '@/utils/YupSchema'

type Props = {
  serviceDefaultValue: string
  emailDefaultValue: string
  nameDefaultValue: string
  passwordDefaultValue: string
}

export const Form: React.FC<Props> = ({
  serviceDefaultValue,
  emailDefaultValue,
  nameDefaultValue,
  passwordDefaultValue,
}) => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Passwords> = ({ service, email, name, password, twoFactor }) => {
    router.push('/')
  }
  return (
    <>
      <form className="mx-auto mt-10 flex w-96 flex-col" noValidate onSubmit={handleSubmit(onSubmit)}>
        {errors.service && (
          <span className="form-span" data-testid="serviceError">
            {errors.service?.message}
          </span>
        )}
        <InputForm
          className="input-form"
          defaultValue={serviceDefaultValue}
          htmlFor="service"
          id="service"
          labelName="サービス"
          register={register('service')}
          testId="service"
          type="text"
        />
        {errors.email && (
          <span className="form-span left-1 top-60" data-testid="emailError">
            {errors.email?.message}
          </span>
        )}
        <InputForm
          className="input-form"
          defaultValue={emailDefaultValue}
          htmlFor="email"
          id="email"
          labelName="メールアドレス"
          register={register('email')}
          testId="email"
          type="email"
        />
        {errors.name && (
          <span className="form-span top-[22.5rem]" data-testid="nameError">
            {errors.name?.message}
          </span>
        )}
        <InputForm
          className="input-form"
          defaultValue={nameDefaultValue}
          htmlFor="name"
          id="name"
          labelName="名前"
          register={register('name')}
          testId="name"
          type="text"
        />
        {errors.password && (
          <span className="form-span top-[30rem]" data-testid="passwordError">
            {errors.password?.message}
          </span>
        )}
        <InputForm
          className="input-form"
          defaultValue={passwordDefaultValue}
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
        <FormButton />
      </form>
    </>
  )
}
