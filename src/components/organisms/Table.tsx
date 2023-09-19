'use client'

import { PostgrestSingleResponse } from '@supabase/supabase-js'

import { CellFrame } from '@/components/molecules/CellFrame'
import { TableHeaderFrame } from '@/components/molecules/TableHeaderFrame'
import { Passwords } from '@/types/signals'

type Props = {
  passwords: PostgrestSingleResponse<Passwords[]>
}

export const Table: React.FC<Props> = ({ passwords }) => {
  return (
    <table className="table table-xs mt-10 xl:table-md xl:mx-auto xl:w-1/2">
      <TableHeaderFrame
        email="メールアドレス"
        name="名前"
        password="パスワード"
        service="サービス"
        twoFactor="2段階認証の有無"
      />
      {passwords.data?.map((pw) => (
        <CellFrame
          key={pw.id}
          email={pw.email}
          id={pw.id}
          name={pw.name}
          password={pw.password}
          service={pw.service}
          twoFactor={pw.twoFactor ? '有' : '無'}
        />
      ))}
    </table>
  )
}
