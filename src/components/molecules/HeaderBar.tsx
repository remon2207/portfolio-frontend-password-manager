import { Button } from '@/components/atoms/Button'
import { Title } from '@/components/atoms/Title'

export const HeaderBar = () => {
  return (
    <div className="flex h-20 justify-between">
      <Button buttonName="新規作成" className="header-button ml-96" href="create" />
      <Title
        className="my-auto text-center text-4xl font-bold underline-offset-8 hover:underline"
        title="パスワード管理"
      />
      <Button buttonName="ログアウト" className="header-button mr-96" href="/signin" />
    </div>
  )
}
