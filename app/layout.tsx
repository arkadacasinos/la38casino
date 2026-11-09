import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#0b0410]">
      <head>
        <meta name="yandex-verification" content="a727fe360baa2a05" />
        <meta charSet="utf-8" />
        <title>La Casino официальный сайт | Ля Казино зеркало рабочее и вход</title>
        <meta
          name="description"
          content="Официальный сайт La Casino и рабочее зеркало Ля Казино: вход, регистрация, бонус до 225% + 1000 FS на 4 депозита. Играть онлайн в слоты и live-игры 24/7."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://la38casino.vercel.app/" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#0b0410" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://la38casino.vercel.app/" />
        <meta property="og:title" content="La Casino официальный сайт | Ля Казино зеркало рабочее" />
        <meta
          property="og:description"
          content="La Casino официальный сайт и актуальное рабочее зеркало Ля Казино. Бонусы до 225% + 1000 FS, моментальные выплаты и честная игра онлайн."
        />
        <meta property="og:image" content="https://la38casino.vercel.app/hero-bg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Casino официальный сайт | Ля Казино зеркало" />
        <meta
          name="twitter:description"
          content="Актуальное рабочее зеркало Ля Казино и официальный сайт La Casino. Играйте онлайн с топовым приветственным пакетом."
        />
        <meta name="twitter:image" content="https://la38casino.vercel.app/hero-bg.jpg" />
      </head>
      <body className="antialiased bg-[#0b0410] text-[#f2eef8] font-sans selection:bg-[#e6007e] selection:text-white">
        {children}
      </body>
    </html>
  )
}
