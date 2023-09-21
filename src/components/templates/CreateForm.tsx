import { Form } from '@/components/organisms/Form'
import { sessionCheck } from '@/utils/sessionCheck'

export const CreateForm: React.FC = async () => {
  const data = await sessionCheck()
  const userId = data?.userId

  if (typeof userId === 'undefined') {
    return <p>error...</p>
  }

  return (
    <>
      <Form
        emailDefaultValue=""
        id={0}
        nameDefaultValue=""
        passwordDefaultValue=""
        serviceDefaultValue=""
        userId={userId}
      />
    </>
  )
}
