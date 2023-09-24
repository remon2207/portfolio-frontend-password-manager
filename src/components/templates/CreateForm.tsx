import { Form } from '@/components/organisms/Form'
import { sessionCheck } from '@/utils/sessionCheck'

export const CreateForm: React.FC = async () => {
  const data = await sessionCheck()
  const userId = data?.userId

  if (typeof userId === 'undefined') {
    return (
      <>
        <h1 className="relative top-[30%] text-center text-2xl font-bold lg:text-4xl">サインインしてください</h1>
      </>
    )
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
