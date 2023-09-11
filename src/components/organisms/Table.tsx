import { CellFrame } from '@/components/molecules/CellFrame'
import { TableHeaderFrame } from '@/components/molecules/TableHeaderFrame'
import { Passwords } from '@/types/signals'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

type Props = {
  passwords: PostgrestSingleResponse<Passwords[]>
}

export const Table: React.FC<Props> = ({ passwords }) => {
  return (
    <table className="mx-auto mt-10 table w-3/4">
      <TableHeaderFrame
        service="サービス"
        email="メールアドレス"
        name="名前"
        password="パスワード"
        twoFactor="2段階認証の有無"
        secret="シークレット"
      />
      {/* <CellFrame  /> */}
      {passwords.data?.map((pw) => (
        <CellFrame
          service={pw.service}
          email={pw.email}
          name={pw.name}
          password={pw.password}
          twoFactor={pw.twoFactor ? '有' : '無'}
          secret={pw.secret}
        />
      ))}
    </table>
  )
}
