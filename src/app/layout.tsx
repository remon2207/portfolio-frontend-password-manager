import { Noto_Sans_JP } from 'next/font/google'
import { Header } from '@/components/organisms/Header'
import '@/styles/globals.css'
import NextAuthProvider from '@/utils/NextAuth'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
})

export const revalidate = 0

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={notoSansJP.className} lang="ja">
      <body className="h-screen">
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
