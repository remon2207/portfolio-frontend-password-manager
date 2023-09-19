import { Form } from '@/components/organisms/Form'
import { supabase } from '@/utils/supabase'

type Props = {
  id: string
}

export const EditForm: React.FC<Props> = async ({ id }) => {
  const { data } = await supabase.from('password').select().eq('id', id)

  return (
    <>
      {data?.map((pw) => (
        <Form
          key={pw.id}
          emailDefaultValue={pw.email}
          nameDefaultValue={pw.name}
          passwordDefaultValue={pw.password}
          serviceDefaultValue={pw.service}
        />
      ))}
    </>
  )
}
