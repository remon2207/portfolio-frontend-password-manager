import { atom } from 'jotai'

export const passwordData = atom({
  service: '',
  email: '',
  name: '',
  password: '',
  twoFactor: false,
  note: 'なし',
})
