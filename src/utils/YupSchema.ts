import * as yup from 'yup'

export const schema = yup.object({
  service: yup.string().required('サービス名を入力してください'),
  email: yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスを入力してください'),
  name: yup.string().required('名前を入力してください'),
  password: yup.string().required('パスワードを入力してください'),
  twoFactor: yup.boolean().required(),
})
