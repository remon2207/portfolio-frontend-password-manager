'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'

type Props = {
  onClick?: () => void
}

export const FormButton: React.FC<Props> = ({ onClick }) => {
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
      <div className="mx-auto">
        <Button className="form-button px-8" name="削除" onClick={onClick} type="button" />
      </div>
    </>
  )
}
