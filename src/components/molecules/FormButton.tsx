'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'

export const FormButton: React.FC = () => {
  const router = useRouter()

  const onClickMoveHomePage = () => {
    router.push('/')
  }

  return (
    <>
      <div className="mx-auto mb-14 pt-10">
        <Button className="form-button" name="キャンセル" onClick={onClickMoveHomePage} type="button" />
        <Button className="form-button px-[1.4rem]" name="送信" type="submit" />
      </div>
    </>
  )
}
