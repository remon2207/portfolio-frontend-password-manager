import { Noto_Sans_JP } from 'next/font/google'

import '@/styles/globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={notoSansJP.className} lang="ja">
      <body className="h-screen">
    </html>
  )
}

export default RootLayout
