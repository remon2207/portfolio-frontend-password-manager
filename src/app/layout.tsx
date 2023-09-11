import '@/styles/globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className="h-screen">{children}</body>
    </html>
  )
}

export default RootLayout
