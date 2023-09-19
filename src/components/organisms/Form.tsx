'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { usePathname } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormButton } from '@/components/molecules/FormButton'
import { InputForm } from '@/components/molecules/InputForm'
import { Passwords } from '@/types/signals'
import { schema } from '@/utils/YupSchema'
import { supabase } from '@/utils/supabase'

type Props = {
  serviceDefaultValue: string
  emailDefaultValue: string
  nameDefaultValue: string
  passwordDefaultValue: string
  id?: number
}

export const Form: React.FC<Props> = ({
  serviceDefaultValue,
  emailDefaultValue,
  nameDefaultValue,
  passwordDefaultValue,
  id,
}) => {
  const pathname = usePathname()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Passwords> = async ({ service, email, name, password, two_factor }) => {
    if (pathname === '/create') {
      await supabase.from('password').insert([{ service, email, name, password, two_factor, user_id: 1 }])
    } else if (pathname === '/edit') {
      if (typeof id === 'number') {
        await supabase.from('password').update({ service, email, name, password, two_factor }).eq('id', id)
      }
    }
    window.location.href = '/'
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
          <span className="form-span" data-testid="emailError">
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
          <span className="form-span" data-testid="nameError">
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
          <span className="form-span" data-testid="passwordError">
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
